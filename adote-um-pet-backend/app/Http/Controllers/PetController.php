<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use App\Http\Requests\PetRequest;

class PetController extends Controller
{
    public function index() {
        return Pet::get();
    }

    public function store(PetRequest $request) {

        $petData = $request -> all();

        return Pet::create($petData);

    }
}
