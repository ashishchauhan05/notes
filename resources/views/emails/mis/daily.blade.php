<html>
<head>
<style>
table, td, th {
    border: 1px solid black;
}

table {
    border-collapse: collapse;
}
td.center {
    text-align:center;
}
.text-center {
    text-align:center;
}
</style>
</head>
<body>
<table>
    <tr>
        <td colspan=7 class='text-center'><b>Bookings Created ({{$data['date_yest']}})</b></b></td>
    </tr>
    <tr>
        <td rowspan=2>Source</td>
        <td colspan=2 class='text-center'><b>Today</b></td>
        <td colspan=2 class='text-center'><b>WTD</b></td>
        <td colspan=2 class='text-center'><b>MTD</b></td>
    </tr>
    <tr>
        <td class='text-center'>Customers</td>  
        <td class='text-center'>Revenue</td>
        <td class='text-center'>Customers</td>
        <td class='text-center'>Revenue</td>
        <td class='text-center'>Customers</td>
        <td class='text-center'>Revenue</td>
    </tr>
    @foreach($data['bookings_created_array'] as $i=>$v)
        <tr>
            <td>{{$i}}</td>
            <td class="center">{{{ isset($v['date']['customers']) ? $v['date']['customers'] : '0' }}}
            <td class="center">{{{ isset($v['date']['revenue']) ? '&#8377; '.$v['date']['revenue'] : '0' }}}
            <td class="center">{{{ isset($v['wtd']['customers']) ? $v['wtd']['customers'] : '0' }}}
            <td class="center">{{{ isset($v['wtd']['revenue']) ? '&#8377; '.$v['wtd']['revenue'] : '0' }}}
            <td class="center">{{{ isset($v['mtd']['customers']) ? $v['mtd']['customers'] : '0' }}}
            <td class="center">{{{ isset($v['mtd']['revenue']) ? '&#8377; '.$v['mtd']['revenue'] : '0' }}}
        </td>    
        </tr>
    @endforeach
</table>
<br><br>

<table>
    <tr>
        <td colspan=7 class='text-center'><b>Bookings Fulfilled ({{$data['date_yest']}})</b></td>
    </tr>
    <tr>            
        <td rowspan=2>Source</td>                    
        <td colspan=2 class='text-center'><b>Today</b></td>
        <td colspan=2 class='text-center'><b>WTD</b></td>
        <td colspan=2 class='text-center'><b>MTD</b></td>
    </tr>                                            
    <tr>                                                    
        <td class='text-center'>Customers</td>                                                            
        <td class='text-center'>Revenue</td>                                                                    
        <td class='text-center'>Customers</td>                                                                            
        <td class='text-center'>Revenue</td>                                                                                    
        <td class='text-center'>Customers</td>                                                                                            
        <td class='text-center'>Revenue</td>                                                                                                
    </tr>
    @foreach($data['bookings_fulfilled_array'] as $i=>$v)
        <tr>
            <td>{{$i}}</td>
            <td class="center">{{{ isset($v['date']['customers']) ? $v['date']['customers'] : '0' }}}
            <td class="center">{{{ isset($v['date']['revenue']) ? '&#8377; '.$v['date']['revenue'] : '0' }}}
            <td class="center">{{{ isset($v['wtd']['customers']) ? $v['wtd']['customers'] : '0' }}}                        
            <td class="center">{{{ isset($v['wtd']['revenue']) ? '&#8377; '.$v['wtd']['revenue'] : '0' }}}
            <td class="center">{{{ isset($v['mtd']['customers']) ? $v['mtd']['customers'] : '0' }}}                      
            <td class="center">{{{ isset($v['mtd']['revenue']) ? '&#8377; '.$v['mtd']['revenue'] : '0' }}}
        </td>    
        </tr>
    @endforeach
</table>
<br><br>
<table>
    <tr>
        <td colspan=7 class='text-center'><b>Agent Wise - Bookings Created {{$data['date_yest']}}</b></td>
    </tr>
    <tr>
        <td rowspan=2>Agent</td>
        <td colspan=2 class='text-center'><b>Today</b></td>
        <td colspan=2 class='text-center'><b>WTD</b></td>
        <td colspan=2 class='text-center'><b>MTD</b></td>
    </tr>
    <tr>
        <td class='text-center'>Customers</td>
        <td class='text-center'>Revenue</td>
        <td class='text-center'>Customers</td>
        <td class='text-center'>Revenue</td>
        <td class='text-center'>Customers</td>
        <td class='text-center'>Revenue</td>
    </tr>
    @foreach($data["agent_bookings_created_array"] as $i=>$v)
        <tr>
            <td>{{$i}}</td>
            <td class="center">{{{ isset($v['date']['customers']) ? $v['date']['customers'] : '0' }}}</td>
            <td class="center">{{{ isset($v['date']['revenue']) ? '&#8377; '.$v['date']['revenue'] : '0' }}}</td>
            <td class="center">{{{ isset($v['wtd']['customers']) ? $v['wtd']['customers'] : '0' }}}</td>
            <td class="center">{{{ isset($v['wtd']['revenue']) ? '&#8377; '.$v['wtd']['revenue'] : '0' }}}</td>
            <td class="center">{{{ isset($v['mtd']['customers']) ? $v['mtd']['customers'] : '0' }}}</td>
            <td class="center">{{{ isset($v['mtd']['revenue']) ? '&#8377; '.$v['mtd']['revenue'] : '0' }}}</td>
        </tr>
    @endforeach
</table>
<br><br>
<table>    
    <tr>            
        <td colspan=7 class='text-center'><b>Agent Wise - Bookings Fulfilled ({{$data["date_yest"]}})</b></td>
    </tr>        
    <tr>                            
        <td rowspan=2>Agent</td>        
        <td colspan=2 class='text-center'><b>Today</b></td>
        <td colspan=2 class='text-center'><b>WTD</b></td>
        <td colspan=2 class='text-center'><b>MTD</b></td>
    </tr>                                                            
    <tr>                                                                   
        <td class='text-center'>Customers</td>                                                                            
        <td class='text-center'>Revenue</td>                                                                                    
        <td class='text-center'>Customers</td>                                                                                            
        <td class='text-center'>Revenue</td>                                                                                                    
        <td class='text-center'>Customers</td>                                                                                                            
        <td class='text-center'>Revenue</td>                                                                                                                
    </tr>                                                                                                                    
    @foreach($data['agent_bookings_fulfilled_array'] as $i=>$v)                                                                                                                            
        <tr>                                                                                                                                       
            <td>{{$i}}</td>                                                                                                                                                    
            <td class="center">{{{ isset($v['date']['customers']) ? $v['date']['customers'] : '0' }}}</td>
            <td class="center">{{{ isset($v['date']['revenue']) ? '&#8377; '.$v['date']['revenue'] : '0' }}}</td>
            <td class="center">{{{ isset($v['wtd']['customers']) ? $v['wtd']['customers'] : '0' }}}</td>
            <td class="center">{{{ isset($v['wtd']['revenue']) ? '&#8377; '.$v['wtd']['revenue'] : '0' }}}</td>
            <td class="center">{{{ isset($v['mtd']['customers']) ? $v['mtd']['customers'] : '0' }}}</td>
            <td class="center">{{{ isset($v['mtd']['revenue']) ? '&#8377; '.$v['mtd']['revenue'] : '0' }}}</td>
        </tr>    
    @endforeach
</table>
</body>
</html>
