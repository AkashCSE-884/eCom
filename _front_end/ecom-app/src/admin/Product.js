import React, { useEffect, useState } from "react";
import Ecom from "../Ecom.js";

export default function Product() {

    const [products, setProducts] = useState([]);
    const dataLoad = async () => {
        let token = JSON.parse(Ecom.getCookie("session-member-record"));
        const req = await fetch(
            `http://127.0.0.1:8000/api/product/select-products`,
            {
                headers: new Headers({
                    Authorization: "Bearer " + token["access_token"],
                }),
            }
        );
        let res = await req.json();
        let data = res["ret_data"];
        setProducts(data);
    };

    useEffect(() => {
        dataLoad();
    }, []);
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {products.map((item, key) => {
                        return (

                            <div className="col-lg-4 col-md-12 mb-4" key={key}>
                                <div className="card">
                                    <div
                                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            src={"http://127.0.0.1:8000/" + item['image_path']}
                                            className="img-fluid" style={{width: '100%'}}
                                        />
                                        <a href="#!">
                                            <div className="mask">
                                                <div className="d-flex justify-content-start align-items-end h-100">
                                                    <h5><span className="badge bg-primary ms-2">New</span></h5>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <a  href="" className="text-reset text-decoration-none">
                                            <h5 className="card-title mb-3">{item['name']}</h5>
                                        </a>
                                        <h6 className="mb-3"><strong className="fs-4"> &#2547;</strong> {item['price']}</h6>
                                    </div>
                                </div>
                            </div>


                        );
                    })}

                </div>
                {/* <a href={links}>Next</a> */}
            </div>
        </>
    );
}
