
<nav class="navbar fixed-top navbar-toggleable-md navbar-light sb-navbar">
        <button class="navbar-toggler navbar-toggler-right dropdown-toggle" type="button" id="dropdownThemes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownThemes">
            <a class="dropdown-item" title="Salon" href="/salons">Salon </a>
            <a class="dropdown-item" title="Blog" href="/blog">Blog </a>
            <a class="dropdown-item" title="Academy" href="/academy">Academy </a>           
            <a class="dropdown-item" title="Contact" href="/contact">Contact </a>           
        </div>
        <div class="container">
            <a class="navbar-brand" title="" href="/"><img src='/assets/site/images/logo.png' alt="Ministry logo"></a>
           <!--  <a class="nav-link phone" href="#" data-toggle="modal" data-target="#searchModal" style='font-size:24px;'><i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp;<span class="">8010-000-444</span></a> -->

           <!--  <div class="collapse navbar-collapse" >
                <a class="nav-link phone" href="#" data-toggle="modal" data-target="#searchModal" style='font-size:24px;'><i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp;<span class="">8010-000-444</span></a>
            </div> -->
            <div class="collapse navbar-collapse display-inline-b" id="navbarExample">
                <ul class="navbar-nav mr-auto hidden-md-down ul-phone">
                    <li class="nav-item">
                        <a class="nav-link phone f24" href="#" data-toggle="modal" data-target="#searchModal"><i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp;<span class="">8010-000-444</span></a>
                    </li>
                </ul>
                <ul class="navbar-nav hidden-md-down ul-navbar">
                    <li class="nav-item">
                        <a class="nav-link" href="/salons" title="Salons">Salons</a>
                    </li>
                    <li class="nav-item pad-t30"><span class="divider"></span></li>
                    <li class="nav-item">
                        <a class="nav-link" href="/blog" title="Blog">Blog</a>
                    </li>
                    <li class="nav-item pad-t30" ><span class="divider"></span></li>
                    <li class="nav-item">
                        <a class="nav-link" href="/academy" title="Blog">Academy</a>
                    </li>
                    <li class="nav-item pad-t30"><span class="divider"></span></li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact" title="Contact Us">Contact</a>
                    </li>
                    <!-- <li class="nav-item" style="padding-top: 30px;"><span style="margin-top: 0px;border-right: 1px solid #ec008c;"></span></li> -->
                    @if (Auth::user())
                   <!--  <li class="nav-item">
                        <a class="nav-link" href="{!! URL::to('account/profile') !!}" title="My Acount">My Account</a>
                    </li>
                    <li class="nav-item" style="padding-top: 30px;"><span style="margin-top: 0px;border-right: 1px solid #ec008c;"></span></li>
                    <li class="nav-item">
                        <a class="nav-link" href="{!! URL::to('auth/logout') !!}" title="login"><i class="fa fa-sign-out"></i>Logout</a>
                    </li> -->
                    @else
                    <!-- <li class="nav-item">
                        <a class="nav-link" id="login-iframe" data-toggle="modal" data-target="#loginModal" title="login">Login / Register</a>
                    </li> -->
                    @endif

                    <!-- <li class="nav-item">
                        <a class="nav-link phone" href="#" data-toggle="modal" data-target="#searchModal" style='font-size:24px;'><i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp;<span class="">8010-000-444</span></a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
