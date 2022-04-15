import React from "react";
import { Redirect } from "react-router-dom";
import Ecom from "../Ecom.js";
import CreateProduct from "./CreateProduct.js";
import ManageProducts from "./ManageProducts.js";
import Product from "./Product.js";
import Sidebar from "./Sidebar.js";


export default function Home() {

    var url = window.location.href;
    url = url.split('/')[3]


        return (
            <>
                <Sidebar />

                <div className="main">
                    {(() => {
                        if (url === "admin") {
                            return (
                                <Product />
                            )
                        }
                        if (url === "create-product") {
                            return (
                                <CreateProduct />
                            )
                        } if (url === "manage-products") {
                            return (
                                <ManageProducts />
                            )
                        }
                    })()}
                </div>
            </>
        );

}
