Hello {{$data['name']}}!<br><br>
We are glad that you have taken a step forward to make yourself look more glamorous with Ministry, India’s fastest growing salon chain.<br><br>
The details of your well deserved grooming break are as follows:<br><br>
<b>Salon:</b> {{$data['salon_name']}}<br>
<b>Salon Location:</b> {{$data['address']}}<br>
<b>Services:</b> {!! $data['servicesSelected'] !!}<br>
<b>Date of appointment:</b> {{$data['date']}}<br>
<b>Time:</b> {{$data['time']}}<br>
<b>Approx Bill Value:</b> &#8377;  {{$data['offered_cost']}}<br><br>
@if($data['coupon_code'] != "")
<b>Coupon Code Used:</b> {{$data['coupon_code']}}<br>
<b>Coupon Discount:</b> {{$data['total_cost'] - $data['offered_cost']}}<br>
@endif
@if($data['voucher_codes'] != "")
<b>Voucher Codes Used:</b> {{$data['voucher_codes']}} for &#8377; {{$data['voucher_payment']}}<br>
@endif
@if(isset($data['razorpay_transaction_id']) && $data['razorpay_transaction_id'] != "")
<b>Amount Paid:</b> &#8377;  {{$data['prepaid_amount']}}<br>
@endif
<br>
<b>Total Service Cost:</b> {{$data['total_cost']}}<br>
<b>Total Discount:</b> {{$data['total_cost'] - $data['offered_cost']}}<br>
@if(isset($data['razorpay_transaction_id']) && $data['razorpay_transaction_id'] != "")
<b>Amount Paid:</b> &#8377;  {{$data['prepaid_amount']}}<br>
@endif
<b>Balance to be paid:</b> {{$data['offered_cost'] - $data['prepaid_amount'] - $data['voucher_payment']}}<br><br>

<b>Name:</b> {{$data['name']}}<br>
<b>Email:</b> {{$data['email']}}<br>
<b>Contact Number:</b> {{$data['mobile']}}<br>
<b>Additional Information:</b> {{$data['more_info']}}<br><br>
For any further assistance, please call us on <b>8010-000-444</b> or write to <b>care@glamstudios.in</b><br><br>
We are looking forward to glamming you up soon.<br><br>

Cheers!<br>
Team – Ministry<br><br>
<b>Beauty Plans Sorted. Now , Book through Grofers for a hassle free grocery shopping experience . Use Code GLAM20 to get a Flat 20 % Discount on the Grofers App/Website . Shop Now!!!</b>
<br><br>
Like us on <a href='https://www.facebook.com/glamstudios.in'>Facebook</a>, Follow on <a href="https://twitter.com/glamstudios_in">Twitter</a>, Follow on <a href="https://www.instagram.com/glamstudios_in/">Instagram</a>
