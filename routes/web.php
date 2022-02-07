<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\MessageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'comment' => Inertia::lazy(function () {
            return \App\Models\Comment::getByChannelId(request('channel_id'));
        }),
        "message" => \App\Models\Message::all(),
//        "comment" => \App\Models\Message::all(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';



Route::get('message', [MessageController::class, 'index'])->name('message');
Route::get('message/create', [MessageController::class, 'create'])->name('message.create');
Route::post('message', [MessageController::class, 'store'])->name('message.store');
Route::get('message/{message}/edit', [MessageController::class, 'edit'])->name('message.edit');
Route::put('message/{message}', [MessageController::class, 'update'])->name('message.update');
Route::delete('message/{message}', [MessageController::class, 'destroy'])->name('message.destroy');
Route::put('message/{message}/restore', [MessageController::class, 'restore'])->name('message.restore');

Route::get('/dashboard/message', function () {
    return Inertia::render('Dashboard', [

    ]);
})->name('dashboard');




Route::get('comment', [CommentController::class, 'index'])->name('comment')->middleware('auth');
Route::get('comment/create', [CommentController::class, 'create'])->name('comment.create')->middleware('auth');
Route::post('comment', [CommentController::class, 'store'])->name('comment.store')->middleware('auth');
Route::get('comment/{comment}/edit', [CommentController::class, 'edit'])->name('comment.edit');
Route::put('comment/{comment}', [CommentController::class, 'update'])->name('comment.update')->middleware('auth');
Route::delete('comment/{comment}', [CommentController::class, 'destroy'])->name('comment.destroy');
Route::put('comment/{comment}/restore', [CommentController::class, 'restore'])->name('comment.restore');
