import React, { useEffect, useState } from "react";
import Ecom from "../Ecom.js";
import Navbar from "./Navbar.js";

export default function Index() {
    if(!Ecom.getCookie("session-member-record")){
        window.location.href ="/login";
    }
    let token = JSON.parse(Ecom.getCookie("session-member-record"));

    const [products, setProducts] = useState([]);
    const dataLoad = async () => {

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
        } else {
            dataLoad();
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        eCom
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                onKeyUp={searchPorduct}
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/logout"
                                >
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
                                            src={
                                                "http://127.0.0.1:8000/" +
                                                item["image_path"]
                                            }
                                            className="img-fluid"
                                            style={{ width: "100%" }}
                                        />
                                        <a href="#!">
                                            <div className="mask">
                                                <div className="d-flex justify-content-start align-items-end h-100">
                                                    <h5>
                                                        <span className="badge bg-primary ms-2">
                                                            New
                                                        </span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <a
                                            href=""
                                            className="text-reset text-decoration-none"
                                        >
                                            <h5 className="card-title mb-3">
                                                {item["name"]}
                                            </h5>
                                        </a>
                                        <h6 className="mb-3">
                                            <strong className="fs-4">
                                                {" "}
                                                &#2547;
                                            </strong>{" "}
                                            {item["price"]}
                                        </h6>
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
