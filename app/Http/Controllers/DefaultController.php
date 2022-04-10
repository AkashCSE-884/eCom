<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class DefaultController extends Controller
{
    // public function __construct() {
    //     $this->middleware('auth:api', ['except' => ['/']]);
    // }
    public function test(Request $request)
    {

        return view('index');
    }

    public function saveData(Request $req)
    {
        $visit = new User();
        $clientIP = request()->ip();
        $email = $req->input('email');
        $name = $req->input('name');
        $visit->name =  $req->input('name');
        $visit->email = $req->input('email');
        $visit->password = "123";
        $visit->save();
        return redirect()->back();
    }
    public function putData(Request $res)
    {
        $res->validate([
            'email' => 'required | min : 5',
            'pass' => 'required  | min : 3'
        ]);
        return redirect('/');
    }
}
