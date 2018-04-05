<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="/assets/site/images/user2-160x160.png" class="img-circle" alt="User Image" />
            </div>
            <div class="pull-left info">
                <p>{{ Auth::user()->name }}</p>
                <small>{{ Auth::user()->designation }}</small>
            </div>
        </div>
        <!-- search form -->
        <form action="/issues/view/" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="token" class="form-control" placeholder="Search by token"/>
                <span class="input-group-btn">
                    <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
                </span>
            </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <!--<li class="header">MAIN NAVIGATION</li>-->
            <li class="header"></li>
            <li class="@if ($menu_id=='menu_reports') active @endif treeview" id="menu_reports">
                <a href="/">
                    <i class="fa fa-dashboard"></i> <span>Reports</span>
                </a>
            </li>
            <li class="@if ($menu_id=='menu_issue_management') active @endif treeview" id="menu_issue_management">
                <a href="#">
                    <i class="fa fa-institution"></i> <span>Issue Management</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li class="@if ($submenu_id=='submenu_issue_list') active @endif"><a href="/issues" id="submenu_issue_list"><i class="fa fa-circle-o"></i> Issues List</a></li>
                    <li class="@if ($submenu_id=='submenu_create_issue') active @endif"><a href="/issues/create" id="submenu_create_issue"><i class="fa fa-circle-o"></i> Create New Issues</a></li>
                    <li class="@if ($submenu_id=='submenu_issue_search') active @endif"><a href="/issues/search" id="submenu_issue_search"><i class="fa fa-circle-o"></i> Search</a></li>
                    <li class="@if ($submenu_id=='submenu_category_list') active @endif"><a href="/categories" id="submenu_category_list"><i class="fa fa-circle-o"></i> Categories</a></li>
                    <li class="@if ($submenu_id=='submenu_village_list') active @endif" id="submenu_village_list"><a href="/villages"><i class="fa fa-circle-o"></i> Villages</a></li>
                </ul>
            </li>
            <li class="@if ($menu_id=='menu_fund_management') active @endif treeview" id="menu_fund_management">
                <a href="#">
                    <i class="fa fa-money"></i> <span>Fund Management</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li class="@if ($submenu_id=='submenu_fund_details') active @endif"><a href="/funds" id="submenu_fund_details"><i class="fa fa-circle-o"></i> Details</a></li>
                    <li class="@if ($submenu_id=='submenu_fund_report') active @endif"><a href="/funds/report" id="submenu_fund_report"><i class="fa fa-circle-o"></i> Fund Report</a></li>
                </ul>
            </li>
            <li class="@if ($menu_id=='menu_rms_uid_registration') active @endif treeview" id="menu_rms_uid_registration">
                <a href="/uid/">
                    <i class="fa fa-users"></i> <span>UID Registration</span> <!--<i class="fa fa-angle-left pull-right"></i>-->
                </a>
                <!--<ul class="treeview-menu">
                    <li class="@if ($submenu_id=='submenu_uid_list') active @endif"><a href="/uid/" id="submenu_uid_list"><i class="fa fa-circle-o"></i> UID List</a></li>
                </ul>-->
            </li>
            @if(Auth::check())
                @if(Auth::user()->admin==1)
                    <li class="@if ($menu_id=='menu_user_management') active @endif treeview" id="menu_user_management">
                        <a href="/admin/users">
                            <i class="fa fa-user"></i> <span>Users</span>
                        </a>
                    `</li>
                @endif
            @endif
        </ul>
    </section>
</aside>
