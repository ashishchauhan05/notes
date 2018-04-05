<?php

/*

| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');

Route::get('blog', 'BlogController@index');
Route::get('blog/{id}/{slug}', 'BlogController@getPost');

Route::post('/webhook/payment', 'WebhookController@payment');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

Route::group(['prefix' => 'admin', 'namespace' => 'Auth'], function() {
    Route::get('auth/login', 'AdminAuthController@getLogin');
    Route::post('auth/login', 'AdminAuthController@postLogin');
});

Route::group(['prefix' => 'api', 'namespace' => 'API'], function() {
   
    Route::get('scrape', 'ScrapeController@fetchLinks');
    Route::get('lng', 'LngController@index');    
    Route::post('contact/create','ContactsController@postCreate');
});


Route::group(['prefix' => 'admin', 'roles' => ['admin','user'], 'middleware' => 'auth', 'namespace' => 'Admin'], function() {

    Route::pattern('id', '[0-9]+');
    Route::pattern('id2', '[0-9]+');

    Route::get('/','DashboardController@index');
    Route::get('unauthorized','DashboardController@unauthorized');

    Route::get('notes', 'NotesController@index');
    Route::get('note/create', 'NotesController@getCreate');
    Route::post('note/create', 'NotesController@postCreate');
    Route::get('note/{id}/edit', 'NotesController@getEdit');
    Route::post('note/{id}/edit', 'NotesController@postEdit');

    Route::get('note/view/{url}', 'NotesController@view');
    Route::get('note/{id}/comment', 'NotesController@createComment');
    Route::post('note/{id}/comment', 'NotesController@postComment');
    Route::get('notes/data', 'NotesController@data');

    Route::get('scrape','ScrapeController@index');
    Route::get('lng','LngController@index');
    Route::get('contacts','ContactsController@index');

});


Route::group(['prefix' => 'admin', 'roles' => ['admin'], 'middleware' => 'auth', 'namespace' => 'Admin'], function() {

    Route::pattern('id', '[0-9]+');
    Route::pattern('id2', '[0-9]+');

    Route::get('users', 'UserController@index');
    Route::get('users/data', 'UserController@data');
    Route::get('users/create', 'UserController@getCreate');
    Route::post('users/create', 'UserController@postCreate');
    Route::get('users/add_edit_roles/{id}', 'UserController@getRoles');
    Route::post('users/add_edit_roles/{id}', 'UserController@postRoles');
    Route::post('users/add_edit_permissions/{id}', 'UserController@postPermissions');
    Route::get('users/{id}/edit', 'UserController@getEdit');
    Route::post('users/{id}/edit', 'UserController@postEdit');
    Route::get('users/{id}/delete', 'UserController@getDelete');
    Route::post('users/{id}/delete', 'UserController@postDelete');

});
