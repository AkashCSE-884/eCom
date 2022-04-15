import React, { useState } from 'react'
import Ecom from "../Ecom.js";
import swal from 'sweetalert';
import $ from 'jquery';

export default function CreateProduct() {
    const [image, setimage] = useState('')

    const submitData = async (e) => {

        e.preventDefault();

        let token = JSON.parse(Ecom.getCookie("session-member-record"));
        const frm = new FormData(document.getElementById('product'));
        frm.append('image_path', image)
        frm.append('crp', token['user']['id'] + token['user']['email']);

        const req = await fetch('http://127.0.0.1:8000/api/product/insert', {
            headers: new Headers({
                Authorization: "Bearer " + token["access_token"],
            }),
            "method": "POST",
            "body": frm,
        })
        let res = await req.json();
        if (res.ret_data) {
                window.location.href ="/admin/home";
        }else{
            swal("Something Went Wrong", "", "warning");
        }
    }

    const changeImage = (e) => {
        setimage(e.target.files[0]);
    }
    return (
        <>
            <div className="container">

                <form className="add-products rounded shadow p-5" id="product" encType="multipart/form-data">
                <h1>Add Product</h1>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="productName" name="name" data-parsley-trigger="keyup" required=""/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Description</label>
                        <textarea className="form-control" id="content" name="content" rows="3" aria-label="" ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" name="price" required=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Image" className="form-label">Image</label>
                        <input type="file" className="form-control" id="Image" name="image" onChange={changeImage} accept="image/png, image/jpg" required=""/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submitData}>Submit</button>
                </form>
            </div>
        </>
    )
}
