<?php

namespace Database\Factories;

use App\Models\Bookable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use Illuminate\Support\Arr;


class BookableFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \App\Models\Bookable::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $suffix = [
            'Villa',
            'House',
            'Cottage',
            'Luxury Villas',
            'Cheap House',
            'Rooms',
            'Cheap Rooms',
            'Luxury Rooms',
            'Fancy Rooms'
        ];
        return [
            'title' => $this->faker->city . ' ' . Arr::random($suffix),
            'description' => $this->faker->text()
        ];
    }
}
