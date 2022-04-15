import React, { useEffect, useState } from "react";
import Ecom from "../Ecom.js";
import UpdateProduct from "./UpdateProduct";
import swal from "sweetalert";

export default function ManageProducts() {
    let token = JSON.parse(Ecom.getCookie("session-member-record"));
    const [products, setProducts] = useState([]);

    const deleteAction = (e) => {
        console.log(e.target.getAttribute("data-id"));
        swal({
            title: "Are you sure to delete?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                const frm = new FormData();
                frm.append("id", e.target.getAttribute("data-id"));
                const req = await fetch(
                    "http://127.0.0.1:8000/api/product/delete",
                    {
                        headers: new Headers({
                            Authorization: "Bearer " + token["access_token"],
                        }),
                        method: "post",
                        body: frm,
                    }
                );
                let data = await req.json();
                swal("Poof! product has been deleted!", {
                    icon: "success",
                });
                if (data["ret_data"]) {
                    dataLoad();
                }
            } else {
                swal("product is safe!");
            }
        });
    };

    const updateDataLoad = async (e) => {
        const frm = new FormData();
        frm.append("id", e.target.getAttribute("data-id"));
        const req = await fetch(
            "http://127.0.0.1:8000/api/product/select-product",
            {
                headers: new Headers({
                    Authorization: "Bearer " + token["access_token"],
                }),
                method: "post",
                body: frm,
            }
        );
        let data = await req.json();
        data = data["ret_data"];

        document.getElementById("productName").value = data.name;
        document.getElementById("content").value = data.content;
        document.getElementById("price").value = data.price;
        document.getElementById("updateBtn").setAttribute("data-id", data.id);
        document.getElementById(
            "imgSrc"
        ).innerHTML = `<img src="http://127.0.0.1:8000/${data.image_path}"   name="img" id="upImg" style="width: 250px; height: 150px"/>`;
    };

    const dataLoad = async () => {
        const req = await fetch(
            "http://127.0.0.1:8000/api/product/select-products",
            {
                headers: new Headers({
                    Authorization: "Bearer " + token["access_token"],
                }),
            }
        );
        let data = await req.json();
        data = data["ret_data"];

        setProducts(data);
    };

    useEffect(() => {
        dataLoad();
    }, []);

    const searchPorduct = async (e) => {
        if (e.target.value) {
            const req = await fetch(
                `http://127.0.0.1:8000/api/product/search-product/${e.target.value}`,
                {
                    headers: new Headers({
                        Authorization: "Bearer " + token["access_token"],
                    }),
                }
            );
            let data = await req.json();
            data = data["ret_data"];

            setProducts(data);

        }else{
             dataLoad();
        }
    };

    return (
        <div className="container mt-5">
            <div className="rounded shadow p-5">
                <div className="d-flex justify-content-end">
                    <div className="form-outline mb-4 w-50">
                        <input
                            type="search"
                            className="form-control"
                            id="datatable-search-input"
                            placeholder="Search"
                            onKeyUp={searchPorduct}
                        />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, key) => {
                            return (
                                <tr key={key} className="data">
                                    <td scope="row">{key}</td>
                                    <td>{product["name"]}</td>
                                    <td>{product["price"]}</td>
                                    <td>
                                        <img
                                            src={
                                                "http://127.0.0.1:8000/" +
                                                product["image_path"]
                                            }
                                            style={{ height: 79, width: 196 }}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </td>
                                    <td className="d-flex">
                                        <button
                                            type="button"
                                            className="btn btn-primary mx-2"
                                            data-id={product["id"]}
                                            onClick={updateDataLoad}
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-warning"
                                            type="button"
                                            data-id={product["id"]}
                                            onClick={deleteAction}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <UpdateProduct />
        </div>
    );
}
