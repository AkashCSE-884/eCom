<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api, code:2');
    }
    public function productInsert(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|string',
            'content' => 'required|string|max:5000',
            'price' => 'required|numeric',
            'image_path' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $product = new Product();
        $data = $product::insertGetId($validator->validated());

        $file = $req->file('image_path');
        $filename = $file->getClientOriginalName();
        $file->move(public_path('image'), $filename);

        $data = $product::find($data);
        $data->image_path = 'image/' . $filename;
        $data->save();
        return response()->json([
            'message' => 'producted successfully inserted',
            'ret_data' => $data

        ], 200);
    }

    public function productUpdate(Request $req)
    {

        $validator = Validator::make($req->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $data = Product::find($req->id);
        if ($data) {

            $validator = Validator::make($req->all(), [

                'name' => 'required|string|between:2,100',
                'content' => 'required|string|max:5000',
                'price' => 'required|numeric',
                'image_path' => 'required',

            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
            $product = new Product();

            $file = $req->file('image_path');


            if ($file) {
                $filename = $file->getClientOriginalName();
                $file->move(public_path('image'), $filename);
                $data->image_path = $filename;
            }
            $data->name = $req->name;
            $data->content = $req->content;
            $data->price = $req->price;

            $data = $data->save();

            if ($data) {
                $data = $product::find($data);
                return response()->json([
                    'message' => 'product successfully updated',
                    'ret_data' => $data
                ], 200);
            } else {
                return response()->json(['err_msg' => 'something went wrong', 'status' => 404]);
            }
        } else {
            return response()->json(['err_msg' => 'invalid id provided']);
        }
    }

    public function deleteProduct(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $data = Product::find($req->id);
        if ($data) {
            $data = $data->delete();
            return response()->json(['ret_data' => $data]);
        } else {
            return response()->json(['err_msg' => 'invalid id provided']);
        }
    }

    public function selectProducts(Request $req)
    {
        return response()->json(['ret_data' => Product::all()]);
    }
    public function selectProduct(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $data = Product::find($req->id);
        if ($data) {
            return response()->json(['ret_data' => $data]);
        } else {
            return response()->json(['err_msg' => 'invalid id provided']);
        }
    }
}
