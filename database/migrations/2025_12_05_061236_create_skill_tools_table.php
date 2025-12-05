<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   public function up()
{
    Schema::create('skill_tools', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('name');
        $table->string('icon_url');
        $table->string('category'); // Languages, Frameworks & Libraries, etc.
        $table->integer('order')->default(0);
        $table->timestamps();
    });
}
};
