<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>
<h1> A demo application to illustrate how Inertia.js works.<h1>
 </br>

![](https://i.ibb.co/9cJM2tC/Screenshot-from-2022-02-06-15-21-13.png)
![](https://i.ibb.co/vsMkBjr/Screenshot-from-2022-02-07-11-44-01.png)


## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

<p dir="auto">Install PHP dependencies:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="composer install"><pre>composer install</pre></div>
<p dir="auto">Install NPM dependencies:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="npm ci"><pre>npm ci</pre></div>
<p dir="auto">Build assets:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="npm run dev"><pre>npm run dev</pre></div>
<p dir="auto">Setup configuration:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="cp .env.example .env"><pre>cp .env.example .env</pre></div>
<p dir="auto">Generate application key:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan key:generate"><pre>php artisan key:generate</pre></div>
<p dir="auto">Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="touch database/database.sqlite"><pre>touch database/database.sqlite</pre></div>
<p dir="auto">Run database migrations:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan migrate"><pre>php artisan migrate</pre></div>
<p dir="auto">Run database seeder:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan db:seed"><pre>php artisan db:seed</pre></div>
<p dir="auto">Run the dev server (the output will give the address):</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan serve"><pre>php artisan serve</pre></div>
