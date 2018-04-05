<!--    <div id="aq-block-10873-4" class="aq-block aq-block-aq_menu_block aq_span12 aq-first cf">
        <style type="text/css">
            
            @media screen and (min-width:0px) and (max-width:950px){
                #header {
                height: 50px !important;
               }
            }

        </style>
        <style scoped>

            #header ul.menu > li > a, .pmc-menu-button {
                padding-bottom: 0px;
            }
            #logo{
                margin-top:21px;
            }
            #header .mainmenu ul.menu{
                padding-top:0px;
            }
            .smallheader #headerwrap #header ul.menu > li{
                border-right:1px solid #3d3d3d
            }
            #header ul.menu > li:last-child {
                border:none !important;
            }
            .pagenav {
                text-align:center !important;
            }
        </style>
        <header>
            <div id="headerwrap" class="@if(Request::path()=='/') pmc_menu_transparent @endif">
                <div id="header">
                    <div id="logo">
                        <a href="/"><img src="/assets/site/images/logo.png" /></a>
                    </div>
                    <div class="pagenav mainmenu   menu-right  menu-right-float" style='text-align:right !important; padding-right: 10px'>
                        <ul id="menu-single-menu-2" class="menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor @if ($current_page=='home') current-menu-parent @endif current_page_parent current_page_ancestor menu-item-has-children">
                                <a  href="/">Home</a>
                            </li>
                            <li class="bigimagemenu menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children @if ($current_page=='promotions') current-menu-parent @endif">
                                <a  href="{{URL::to('home')}}#promotions">Promotions</a>
                            </li>
                            <li class="bigimagemenu menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children @if ($current_page=='salons') current-menu-parent @endif">
                                <a  href="/find">Salons</a>
                            </li>
                            <li class="bigimagemenu menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children @if ($current_page=='blog') current-menu-parent @endif">
                                <a  href="{{URL::to('blog')}}">Blog</a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children @if ($current_page=='contact') current-menu-parent @endif">
                                <a  href="/contact">Contact</a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children @if ($current_page=='contact') current-menu-parent @endif">
                                <a href="#" style='font-size:24px;padding:0px !important;'><i class="fa fa-phone"></i>8010-000-444</a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                @if (Auth::user())
                                    <div class="dropdown">
                                        <div class="dropbtn"><b>{{ Auth::user()->name }}</b></div>
                                        <div class="dropdown-content">
                                        <a href="{!! URL::to('account/profile') !!}"><i class="fa fa-user text-red"></i> Profile</a>
                                        @if (  config('auth.table') == 'users' && Auth::user()->hasRole('agent'))
                                        <a href="{!! URL::to('agent/orders/') !!}"><i class="fa fa-user text-red"></i> My Orders</a>
                                        @endif
                                        @if (  config('auth.table') == 'users' && (Auth::user()->hasRole('admin') || Auth::user()->hasRole('call-center')))
                                        <a href="{!! URL::to('/admin') !!}"><i class="fa fa-exchange text-red"></i> Open Admin</a>
                                        @endif
                                        @if (  config('auth.table') == 'users' && (Auth::user()->hasRole('salon_mgr') || Auth::user()->hasRole('glamos_user')))
                                        <a href="{!! URL::to('/glamos') !!}"><i class="fa fa-exchange text-red"></i> Open Glamos</a>
                                        @endif
                                        <a href="{!! URL::to('account/changepassword') !!}"><i class="fa fa-lock text-red"></i> Change Password</a>
                                        <a href="{!! URL::to('auth/logout') !!}"><i class="fa fa-sign-out"></i>Logout</a>
                                      </div>
                                    </div>
                                @else
                                    <a class="iframe cboxElement" href="/signin" style='padding-top:0px;padding-bottom:0px;font-size:18px;'><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a>
                                @endif
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>-->
