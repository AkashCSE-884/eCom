import React, { Component } from 'react'
import Ecom from '../Ecom.js'
import swal from 'sweetalert';

export default class Login extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        var frm = new FormData(document.getElementById('loginForm'));
        const req = await fetch('http://127.0.0.1:8000/api/auth/login', {
            "method": "POST",
            "body": frm

        })
        let res = await req.json();
        if (res.access_token) {
            Ecom.setCookie('session-member-record', JSON.stringify(res), 10);
            if(res.user.user_type === 3){
                window.location.href = "/admin/home";
            }else{
                window.location.href = "/";
            }

        }else{
            swal("Wrong User Name or password", "", "warning");
        }


    }
    render() {
        return (
            <>
                <section className="" >
                    <div className="container py-3 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card card-c" >
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img className="card-image img-fluid" src="http://127.0.0.1:8000/image/img1.webp" alt="login form" />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 text-black">
                                                <form id="loginForm" onSubmit={this.handleSubmit}  >
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i className="fas fa-cubes fa-2x me-3"></i>
                                                        <span className="h1 fw-bold mb-0" >eCom</span>
                                                    </div>
                                                    <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" name="email"

                                                            className="form-control form-control-lg" />
                                                        <label className="form-label" autoComplete="off"
                                                            htmlFor="form2Example17">Email address</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" name="password"
                                                            className="form-control form-control-lg" />
                                                        <label className="form-label" autoComplete="off"
                                                            htmlFor="form2Example27">Password</label>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button name="login" className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                    </div>


                                                    <p className="mb-5 pb-lg-2" >Don't have an account? <a href="/register" >Register here</a></p>
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
        )
    }
}
