@extends('admin.layouts.modal') 

@section('content')
<section class="content">
    <div class="row">
        <!-- left column -->
        <div class="col-md-12">
            <!-- general form elements -->
            <div class="box box-primary">
                <div class="box-header">
                    <h3 class="box-title"> @if (isset($note)) Edit @else Create @endif Note</h3>
                    <div class="box-tools">
                        <button class="btn btn-primary btn-sm close_popup">
                        <span class="glyphicon glyphicon-backward"></span> {{{trans('admin/admin.back') }}}
                        </button>
                    </div>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form role="form" method="post" autocomplete="off">
                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                    <div class="box-body">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="name">Note Title</label>
                                <input type="text" class="form-control" tabindex="1" placeholder="Title" name="title" value="@if(isset($note)) {{$note->name}} @endif" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name">Availiblity</label>
                                {!! Form::select('public', array('0' => 'Private', 1 => 'Public'), isset($note) ? $note->public : 0, array('required', 'class'=>'form-control')) !!}
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name">Status</label>
                                {!! Form::select('active', array('1' => 'Active', 0 => 'Inactive'), isset($note) ? $note->active : null, array('required', 'class'=>'form-control')) !!}
                            </div>
                        </div>

                        <div class='col-md-12'>
                            <div class="form-group">
                                <label for="text">Text</label>
                                <textarea class='form-control' placeholder='Description' name="text" style='height:200px;'>{{{ Input::old('text',isset($note) ? $note->text : null)  }}}</textarea>
                            </div>
                        </div>
                       
                    </div><!-- /.box-body -->
                    
                    <div class="box-footer">
                        <button type="reset" class="btn btn-warning close_popup">
                            <span class="glyphicon glyphicon-ban-circle"></span> {{trans("admin/modal.cancel") }}
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="glyphicon glyphicon-ok-circle"></span>
                            @if (isset($note))
                                {{ trans("admin/modal.edit") }}
                            @else
                                {{trans("admin/modal.create") }}
                            @endif
                        </button>
                    </div>
                </form>
                <br><br>
            </div><!-- /.box -->
        </div><!--/.col (left) -->
    </div>   <!-- /.row -->
</section>
@stop 
@section('scripts')
<script type="text/javascript">
    $(function() {
        
    });
</script>
@stop
