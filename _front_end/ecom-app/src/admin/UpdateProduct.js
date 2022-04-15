import React, { useState } from "react";
import Ecom from "../Ecom.js";
import swal from 'sweetalert';
import $ from 'jquery';


export default function UpdateProduct() {
    const [image, setimage] = useState("");

    const dataUpdate = async (e) => {
        // // let r =  getFileFromUrl(document.getElementById("upImg").src, document.getElementById("upImg").name);
        // console.log(e.target.getAttribute('data-id'))

        // let img = document.getElementById('upImg')
        // // let imgName = document.getElementById('upImg').name;

        // fetch(img.src)
        // .then(res => res.blob())
        // .then(blob => {
        //   const file = new File([blob], 'img.jpg', blob)
        //   setimage(file);
        //   console.log(image);
        // })

        // // // $('#product').parsley();
        e.preventDefault();

        let token = JSON.parse(Ecom.getCookie("session-member-record"));
        const frm = new FormData(document.getElementById("product"));
        frm.append("image_path", image);

        frm.append("id",  e.target.getAttribute('data-id'));
        frm.append("crp", token["user"]["id"] + token["user"]["email"]);

        const req = await fetch("http://127.0.0.1:8000/api/product/update", {
            headers: new Headers({
                Authorization: "Bearer " + token["access_token"],
            }),
            method: "POST",
            body: frm,
        });
        let res = await req.json();
        if (res.ret_data) {
            swal("Product Updated Successfully");
            window.location.href = '/manage-products'
        } else {
            swal("Something Went Wrong");
        }
    };
    const changeImage = (e) => {
        let file = e.target.files[0];
        setimage(e.target.files[0]);
        var picture = new FileReader();
        picture.readAsDataURL(e.target.files[0]);

        picture.onload = (e) => {
            document.getElementById(
                "imgSrc"
            ).innerHTML = `<img src="${e.target.result}"  name="${e.target.result.name}" id="upImg" style="width: 250px; height: 150px"/> `;
            // setimage(e.target.result)
        };



    };


    return (
        <>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div
                        className="modal-content"
                        style={{ position: "relative" }}
                    >
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            style={{ position: "absolute", top: 4, right: 4 }}
                            aria-label="Close"
                        ></button>
                        <form
                            className="add-products"
                            id="product"
                            encType="multipart/form-data"
                        >
                            <h1>Add Product</h1>
                            <div className="mb-3">
                                <label
                                    htmlFor="productName"
                                    className="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    name="name"
                                    data-parsley-trigger="keyup"
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    name="content"
                                    rows="3"
                                    aria-label=""
                                    required=""
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    required=""
                                />
                            </div>
                            <div className="mb-3 row">
                                <div className="col-md-6">
                                    <label
                                        htmlFor="Image"
                                        className="form-label"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="Image"
                                        name="image"
                                        onChange={changeImage}
                                        accept="image/png, image/jpg"
                                    />
                                </div>
                                <div className="col-md-6" id="imgSrc"></div>
                            </div>
                            <button type="button" id="updateBtn" className="btn btn-primary" onClick={dataUpdate}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
