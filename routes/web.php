<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

Route::get('/test-migrate', function () {
    Artisan::call('migrate:fresh', ['--seed' => true]);
    return 'Migration complete';
});

Route::get('/{any?}', function () {
    $index = public_path('react/index.html');
    if (! file_exists($index)) {
        abort(500, 'React build not found at public/react/index.html');
    }
    return file_get_contents($index);
})->where('any', '.*');