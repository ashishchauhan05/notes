<?php

return [

	/*
	|--------------------------------------------------------------------------
	| Default Authentication Driver
	|--------------------------------------------------------------------------
	|
	| This option controls the authentication driver that will be utilized.
	| This driver manages the retrieval and authentication of the users
	| attempting to get access to protected areas of your application.
	|
	| Supported: "database", "eloquent"
	|
	*/

	// 'driver' => 'eloquent',

	// 'model' => 'App\User',

	// 'table' => 'users',

	// 'password' => [
	// 	'email' => 'emails.password',
	// 	'table' => 'password_resets',
	// 	'expire' => 60,
	// ]

	'multi'	=> [
		'admin' => [
			'driver' => 'eloquent',
			'model'	=> 'App\User',
		],
		'customer' => [
			'driver' => 'eloquent',
			'model'	=> 'App\Customer',
			// 'table' => 'clients',
			// 'email' => 'client.emails.password',
		],
	],

	'password' => [
		'email' => 'emails.password',
		'table' => 'password_resets',
		'expire' => 60,
	],


];
