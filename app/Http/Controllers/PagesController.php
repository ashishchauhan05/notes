<?php namespace App\Http\Controllers;

use App;
use View;
use App\Http\Requests;
use App\PaymentLink;
use App\Appointment;
use App\Http\Controllers\Controller;
use App\Http\Requests\BecomeAGlamRequest;
use File;

use Illuminate\Http\Request;

class PagesController extends GSController {

	public function welcome()
	{
		return view('pages.welcome');
	}

	public function about()
	{
		return view('pages.about', array('current_page' => -1));
	}

	public function privacy()
	{
		return view('pages.privacy', array('current_page' => -1));
	}

	public function terms()
	{
		return view('pages.terms', array('current_page' => -1));
	}

	public function cancellation_refund_policy()
	{
		return view('pages.cancellation_refund_policy', array('current_page' => -1));
	}

	public function contact()
	{
        View::share('current_page', 'contact');
		return view('pages.contact');
	}

    public function academy()
    {
        View::share('current_page', 'academy');
        return view('pages.academy');
    }

	public function becomeaGlam(Request $request) {
		return view('becomeaglam', array());
	}

	public function makeup_class() {

        return view('pages.makeup_class', array('current_page' => -1));
    }

	public function becomeaGlamRequest(BecomeAGlamRequest $request) {
        $contact = new App\Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->purpose = 'partner';
        if($request->city != '') $contact->city = $request->city;
        if($request->area != '') $contact->area = $request->area;
        if($request->message != '') $contact->contact_text = $request->message;
        $contact->save();
		return view('becomeaglam', array('success' => 1));
	}

    public function webhook() {
        $webhook = fopen('php://input' , 'rb');
        $webhookContent = "";
        while (!feof($webhook)) {
            $webhookContent .= fread($webhook, 4096);
        }
        $data = json_decode($webhookContent);

        //$headers = getallheaders();
        //$sig = $headers['X-Razorpay-Signature'];
        //File::append('/tmp/xyz',$sig);

        //$hash = hash_hmac('sha256', $webhookContent, '1234567890');
        //File::append('/tmp/xyz',$hash);


        if ($data->event=="payment.failed") {
            $payment_details = $data->payload->payment->entity;
            $invoice_id = $payment_details->invoice_id;

            $invoice = PaymentLink::where('invoice_id', $invoice_id)->first();
            $invoice->status = $payment_details->status;
            $invoice->save();
        }

        if ($data->event=="invoice.paid") {
            $invoice_details = $data->payload->invoice->entity;
            $invoice_id = $invoice_details->id;
            $amount = floatval($invoice_details->amount)/100;
            $sms_status = $invoice_details->sms_status;
            $email_status = $invoice_details->email_status;
            $status = $invoice_details->status;

            if ($status=='paid') {
                $invoice = PaymentLink::where('invoice_id', $invoice_id)->first();
                $invoice->amount = $amount;
                $invoice->sms_status = $sms_status;
                $invoice->email_status = $email_status;
                $invoice->status = $status;
                $invoice->has_contributed = 1;
                $invoice->payment_id = $invoice_details->payment_id;

                if ($invoice->type == 'appointment') {
                    $appointment = Appointment::find($invoice->appointment_id);
                    $appointment->prepaid_amount += $amount;
                    $appointment->prepaid_channel = 12;
                    $appointment->save();
                    unset($appointment);
                }
                $invoice->save();
            }
        }
    }

}
