<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// Auth
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\Auth\UserAuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'admin'], function ($router) {
        Route::post('/', [AdminAuthController::class, 'create']);
        Route::post('/login', [AdminAuthController::class, 'login']);
        Route::post('/logout', [AdminAuthController::class, 'logout']);
    }
);


Route::group(['prefix' => 'user'], function ($router) {
        Route::post('/', [UserAuthController::class, 'create']);
        Route::post('/login', [UserAuthController::class, 'login']);
        Route::post('/logout', [UserAuthController::class, 'logout']);
    }
);
