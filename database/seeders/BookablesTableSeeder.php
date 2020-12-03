<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BookablesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Bookable::factory()->count(30)->create();
    }
}
