<?php namespace App\Http\Controllers;

use App;
use View;
use App\Http\Requests;
use App\PaymentLink;
use App\Payment;
use App\Appointment;
use App\GiftVoucher;
use App\VoucherAppointments;
use App\Http\Controllers\Controller;
use App\Http\Requests\BecomeAGlamRequest;
use File;
use DB;
use App\Invoices;

use Illuminate\Http\Request;

class WebhookController extends GSController {
	protected function getallheaders() {
		if (!function_exists('getallheaders')) {
			$headers = [];
			foreach ($_SERVER as $name => $value) {
				if (substr($name, 0, 5) == 'HTTP_') {
					$headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
				}
			}
			return $headers;
		} else {
			return getallheaders();
		}
	}

    public function payment() {
        $webhook = fopen('php://input' , 'rb');
        $webhookContent = "";
        while (!feof($webhook)) {
            $webhookContent .= fread($webhook, 4096);
        }
        $data = json_decode($webhookContent);


        File::append('/tmp/xyz',$webhookContent."\n");

        $headers = $this->getallheaders();
        if (isset($headers['X-Razorpay-Signature'])) {
            $sig = $headers['X-Razorpay-Signature'];

            $hash = hash_hmac('sha256', $webhookContent, env('RAZORPAY_KEY_SECRET'));

            if ($sig!=$hash)
                return;
        }


        if ($data->event=="payment.failed") {
            $payment_details = $data->payload->payment->entity;
            if ( isset($payment_details->invoice_id) ) {
                $invoice_id = $payment_details->invoice_id;

                $invoice = Payment::where('channel_invoice_id', $invoice_id)->first();
                if (isset($invoice)) {
                    $invoice->status = "FAILED";
                    $invoice->save();
                }
            }
        }

        if ($data->event=="invoice.paid") {
            $invoice_details = $data->payload->invoice->entity;
            $invoice_id = $invoice_details->id;
            $amount = floatval($invoice_details->amount)/100;
            $sms_status = $invoice_details->sms_status;
            $email_status = $invoice_details->email_status;
            $status = $invoice_details->status;

            if ($status=='paid') {
                $invoice = Payment::where('channel_invoice_id', $invoice_id)->first();
				if (!$invoice)
					return;
                $invoice->amount = $amount;
                // $invoice->sms_status = $sms_status;
                // $invoice->email_status = $email_status;
                $invoice->status = "PAID";
                // $invoice->has_contributed = 1;
                $invoice->channel_payment_id = $invoice_details->payment_id;

                if ($invoice->payable_type == 'appointment') {
                    $appointment = Appointment::find($invoice->payable_id);
                    
                    $appointment->prepaid_channel = 12;

                    $voucherAppointments = VoucherAppointments::where('appointment_id','=',$appointment->id)->get();
                    $prepaidAmount = $amount;
                    foreach ($voucherAppointments as $key => $voucher_appointment) {
                        $gift_voucher = GiftVoucher::find($voucher_appointment->voucher_id);

                        $voucherCost = intval($gift_voucher->template->amount);
                        $paidAmount = intval($gift_voucher->paid_to_glam) + intval($gift_voucher->paid_to_salon);
                        $remainingAmount = $voucherCost - $paidAmount;

                        if($remainingAmount > 0 && $prepaidAmount > 0) {

                            if($prepaidAmount >= $remainingAmount) {
                                $amountAdj = $remainingAmount;
                            } else {
                                $amountAdj = $prepaidAmount;
                            }

                            $gift_voucher->paid_to_glam += $amountAdj;
                            $appointment->voucher_payment += $amountAdj;
                            $prepaidAmount -= $amountAdj;

                            $prepaidAmount = ($prepaidAmount > 0) ? $prepaidAmount : 0;

                            $gift_voucher->save();
                        }
                   
                    }

                    $prepaidAmount = ($prepaidAmount > 0) ? $prepaidAmount : 0;

                    $appointment->prepaid_amount += $prepaidAmount;

                    $appointment->save();
                    unset($appointment);
                }else if($invoice->payable_type == 'frenchise_commision'){
									$data = DB::table('salon_invoices_ag')
										->join('invoices','salon_invoices_ag.invoice_id','=','invoices.id')
										->where("salon_invoices_ag.salon_id",$invoice->payable_id)
										->whereIn("invoices.status",["FROZEN"])
										->orderBy('salon_invoices_ag.month', 'desc')
										->select('invoices.id')
										->first();
									$saloninvoice = Invoices::where('id',$data->id)->first();
									if($saloninvoice){
										$saloninvoice->paid += $amount;
										$total_amount = $saloninvoice->grand_total? $saloninvoice->grand_total: $saloninvoice->invoice_total;
										if($saloninvoice->discount+$saloninvoice->paid==$total_amount)
										$invoice->status="PAID";
										$saloninvoice->save();
									}
								}
                $invoice->save();
            }
        }
    }

}
