Hi!<br><br>
You have received a request for a booking appointment.<br><br>
The details are as follows:<br><br>
<b>Name:</b> {{$data['name']}}<br>
<b>Email:</b> {{$data['email']}}<br>
<b>Contact Number:</b> {{$data['mobile']}}<br><br>
<b>Salon Name:</b> {{$data['salon_name']}}<br>
<b>Services Selected:</b> {!! $data['servicesSelected'] !!}<br>
<b>Date of appointment:</b> {{$data['date']}}<br>
<b>Time:</b> {{$data['time']}}<br>
<b>Approx Bill Value:</b> &#8377;  {{$data['offered_cost']}}<br>
@if($data['coupon_code'] != "")
<b>Coupon Code Applied:</b> {{$data['coupon_code']}}<br>
@endif
@if($data['voucher_codes'] != "")
<b>Voucher Codes Applied:</b> {{$data['voucher_codes']}} for &#8377; {{$data['voucher_payment']}}<br>
@endif
@if(isset($data['razorpay_transaction_id']) && $data['razorpay_transaction_id'] != "")
<b>Amount Paid:</b> &#8377;  {{$data['prepaid_amount']}}<br>
<b>Transaction ID:</b> {{$data['razorpay_transaction_id']}}<br>
<b>Balance Amount:</b> &#8377;  {{$data['offered_cost'] - $data['prepaid_amount']}}<br>
@endif
<b>Additional Information:</b> {{$data['more_info']}}<br><br>
Team – Ministry<br><br>
Call on 8010-000-444 for booking related assistance.<br><br>
