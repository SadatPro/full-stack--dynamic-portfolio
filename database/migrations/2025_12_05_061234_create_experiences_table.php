<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   public function up()
{
    Schema::create('experiences', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('position');
        $table->string('company');
        $table->date('start_date');
        $table->date('end_date')->nullable();
        $table->boolean('is_current')->default(false);
        $table->text('description');
        $table->string('type')->default('work'); // work, collaboration, education
        $table->timestamps();
    });
}
};
