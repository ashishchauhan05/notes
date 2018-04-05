<header class="main-header">
    <!-- Logo -->
    <a href="/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <!--<span class="logo-mini"><b>A</b>LT</span>-->
        <span class="logo-mini"><b>Admin</b></span>
        <!-- logo for regular state and mobile devices -->
        <!--<span class="logo-lg"><b>Admin</b>LTE</span>-->
        <span class="logo-lg"><b>Admin</b></span>
    </a>
    
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <!-- User Account: style can be found in dropdown.less -->
                <li class="dropdown user user-menu notifications-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="/assets/admin/img/user2-160x160.png" class="user-image" alt="User Image"/>
                        <span class="hidden-xs">{{ Auth::user()->name }}</span>
                    </a>
                    <ul class="dropdown-menu" style='width:180px;'>
                        <li class="header" style='padding:0px;'><a style='padding:7px 20px;color:#000;' href="{!! URL::to('account/editprofile') !!}"><i class="fa fa-user text-red"></i> Profile</a></li>
                        <li class="header" style='padding:0px;'><a style='padding:7px 20px;color:#000;' href="{!! URL::to('account/changepassword') !!}"><i class="fa fa-lock text-red"></i> Change Password</a></li>
                        <li class="footer"><a href="{!! URL::to('auth/logout') !!}"><i class="fa fa-sign-out"></i>Logout</a></li>
                    </ul>

                </li>
            </ul>
        </div>
    </nav>
</header>
