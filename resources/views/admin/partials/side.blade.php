<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            
            <div class="pull-left info">
                <p>Administration</p>
            </div>
        </div>
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <!--<li class="header">MAIN NAVIGATION</li>-->
            <li class="header"></li>

         @if(Auth::check())
            <li class="@if ($menu_id=='menu_dashboard') active @endif treeview" id="menu_dashboard">
                <a href="/admin">
                    <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                </a>
            </li>

            <li class="@if ($menu_id=='menu_contacts') active @endif treeview" id="menu_contacts">
                <a href="/admin/notes">
                    <i class="fa fa-edit"></i> <span>Notes</span>
                </a>
            </li>
            @if(Auth::user()->hasRole(['admin','editor']))
                <li class="@if ($menu_id=='menu_admin') active @endif treeview" id="menu_admin">
                    <a href="#">
                        <i class="fa fa-user"></i> <span>Admin</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li class="@if ($submenu_id=='submenu_users') active @endif">
                            <a href="/admin/users" id="submenu_users"><i class="fa fa-circle-o"></i>Users</a>
                        </li>

                    </ul>
                </li>

            @endif
        @endif
        </ul>
    </section>
</aside>
