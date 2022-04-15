<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DefaultController;
use App\Http\Controllers\ProductController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/users', [AuthController::class, 'usersProfile']);
    Route::get('/user', [AuthController::class, 'selectUser']);
    Route::put('/update/user', [AuthController::class, 'updateProfile']);
    Route::post('/product/insert', [ProductController::class, 'productInsert']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'product',
    'code' => 2
], function ($router) {

    Route::post('/insert', [ProductController::class, 'productInsert']);
    Route::post('/update', [ProductController::class, 'productUpdate']);
    Route::post('/delete', [ProductController::class, 'deleteProduct']);
    Route::get('/select-products', [ProductController::class, 'selectProducts']);
    Route::post('/select-product', [ProductController::class, 'selectProduct']);
    Route::get('/search-product/{name}', [ProductController::class, 'searchProduct']);
});
