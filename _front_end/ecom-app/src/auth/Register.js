import React, { Component } from "react";
import Ecom from "../Ecom.js";
import swal from 'sweetalert';

export default class Register extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        if(this.checkPassword()){
            var frm = new FormData(document.getElementById("loginForm"));
            const req = await fetch("http://127.0.0.1:8000/api/auth/register", {
                method: "POST",
                body: frm,
            });
            let res = await req.json();

            if(res.user){
                window.location.href = "/login";
            }else{
                swal("Something went wrong");
            }

        }

    };
    checkPassword(){
        let pass = document.getElementById("password").value ;
        let confirmPass = document.getElementById("passwordConfirmation").value;

        if(pass === confirmPass && pass.length >5){
            return true;
        }else{
            swal("Password Not match or length not 6", "", "warning")
            return false;
        }

    }
    render() {
        return (
            <>
                <section className="">
                    <div className="container py-3 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card card-c">
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img
                                                className="card-image img-fluid"
                                                src="http://127.0.0.1:8000/image/img1.webp"
                                                alt="login form"
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 text-black">
                                                <form id="loginForm">
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i className="fas fa-cubes fa-2x me-3"></i>
                                                        <span className="h1 fw-bold mb-0">
                                                            eCom
                                                        </span>
                                                    </div>
                                                    <h5 className="fw-normal mb-3 pb-3">
                                                        Create account
                                                    </h5>
                                                    <div className="form-outline mb-3">
                                                        <label
                                                            className="form-label"
                                                            autoComplete="off"
                                                            htmlFor="form2Example17"
                                                        >
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control form-control-lg"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-3">
                                                        <label
                                                            className="form-label"
                                                            autoComplete="off"
                                                            htmlFor="form2Example17"
                                                        >
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control form-control-lg"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-outline mb-3">
                                                                <label
                                                                    className="form-label"
                                                                    autoComplete="off"
                                                                    htmlFor="form2Example27"
                                                                >
                                                                    Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    id="password"
                                                                    className="form-control form-control-lg"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-outline mb-3">
                                                                <label
                                                                    className="form-label"
                                                                    autoComplete="off"
                                                                    htmlFor="form2Example27"
                                                                >
                                                                    Confirm
                                                                    Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    name="password_confirmation"
                                                                    id="passwordConfirmation"
                                                                    className="form-control form-control-lg"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button
                                                            name="login"
                                                            type="button"
                                                            className="btn btn-dark btn-lg btn-block"
                                                            onClick={this.handleSubmit}
                                                        >
                                                            Register
                                                        </button>
                                                    </div>

                                                    {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                                                    <p className="mb-5 pb-lg-2">
                                                        Have an account?
                                                        <a href="/login">
                                                            Sign in Here
                                                        </a>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
