<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email', 30)->collation('utf8mb4_general_ci')->unique();
            $table->string('user_name', 30)->collation('utf8mb4_general_ci');
            $table->char('password', 60)->collation('utf8mb4_general_ci');
        });

        \DB::statement('ALTER TABLE users AUTO_INCREMENT = 1;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
