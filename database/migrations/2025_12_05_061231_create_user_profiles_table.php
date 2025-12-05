<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   // database/migrations/xxxx_create_user_profiles_table.php
public function up()
{
    Schema::create('user_profiles', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('name');
        $table->text('taglines')->nullable();
        $table->text('professional_focus_text')->nullable();
        $table->string('profile_picture_url')->nullable();
        $table->text('bio')->nullable();
        $table->timestamps();
    });
}
};
