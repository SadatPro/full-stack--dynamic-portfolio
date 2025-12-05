<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('projects', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('title');
        $table->text('description');
        $table->string('tech_stack'); // comma separated
        $table->string('image_url')->nullable();
        $table->string('live_link')->nullable();
        $table->string('github_link')->nullable();
        $table->integer('order')->default(0);
        $table->timestamps();
    });
}
};
