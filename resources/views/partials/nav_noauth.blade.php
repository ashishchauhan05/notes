<header class="main-header">
    <nav class="navbar navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">{{$constituency->constituency_name}}</a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
            
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="/assets/site/images/user2-160x160.png" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{ $issue->assigned_name }}</span>&nbsp;&nbsp;<small>( {{ $issue->assigned_designation }} )</small>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
