<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;


class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }
        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized']);
        }
        return $this->createNewToken($token);
    }

    public function register(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($req->password)]
        ));
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 200);
    }


    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }

    public function userProfile()
    {
        return response()->json(auth()->user());
    }

    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    public function usersProfile(Request $res)
    {
        return User::all();
    }

    public function selectUser(Request $res)
    {
        $validator = Validator::make($res->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $data = User::where('id', $res->id)->first();
        if ($data) {
            return $data;
         }else{
            return response()->json(['err_msg' => 'invalid id provided']);
         }
    }

    public function updateProfile(Request $res){


        $validator = Validator::make($res->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $data = User::find($res->id);
        if ($data) {

            $validator = Validator::make($res->all(), [
                'name' => 'required',
                'email' => 'required|string|email|max:100',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }

            $data->name = $res->name;
            $data->email = $res->email;
            $data->save();
            $data = User::find($res->id);
            return $data;
         }else{
            return response()->json(['err_msg' => 'invalid id provided']);
         }

    }
}
