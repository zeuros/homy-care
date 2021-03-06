<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')
    ->prefix('auth')
    ->namespace('App\Http\Controllers')
    ->group(function ($router) {

        Route::post('login', 'AuthController@login'); // api/auth/login
        Route::post('register', 'APIRegisterController@register');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');

    });
