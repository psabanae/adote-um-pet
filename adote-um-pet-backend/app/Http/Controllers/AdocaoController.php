<?php

namespace App\Http\Controllers;

use App\Rules\AdocaoUnicaPet;
use App\Http\Resources\AdocaoCollection;
use App\Models\Adocao;
use Illuminate\Http\Request;

class AdocaoController extends Controller
{
    public function index() {
        $adocoes = Adocao::with('pet') -> get();
        return new AdocaoCollection($adocoes);
    }

    public function store(Request $request) {
        $request->validate([
            'email' => ['required', 'email', new AdocaoUnicaPet($request -> input('pet_id', 0))],
            'valor' => ['required', 'numeric', 'between:10,100'],
            'pet_id' => ['required', 'int', 'exists:pets,id']
        ]);

        $dadosDaAdocao = $request->all();

        return Adocao::create($dadosDaAdocao);
    }
}
