import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./auth/Login";
import Ecom from "./Ecom.js";
import Home from "./admin/Home";
import CreateProduct from "./admin/CreateProduct";
import Register from "./auth/Register";
import Index from "./user/Index";
import Page404 from "./auth/Page404";

export default class App extends Component {
    isLoggedIn = Ecom.getCookie("session-member-record");
    cookie = "";


    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/logout" component={this.Logout} />
                    <Route exact path="/" component={Index} />
                    <Route exact path="/page-404" component={Page404} />

                    {(() => {

                        if (!this.isLoggedIn) {
                            return (
                                <Redirect to="/login" />
                            )
                        }else{
                            <Redirect to="/" />
                        }
                        this.cookie = JSON.parse(this.isLoggedIn);
                        if (this.cookie.user.user_type === 3) {
                            return (
                                <>
                                    <Route exact path="/admin/home" component={Home} />
                                    <Route exact path="/create-product" component={Home} />
                                    <Route exact path="/manage-products" component={Home} />
                                </>
                            )
                        }

                    })()}
                    <Redirect to="/" />
                </Switch>
            </>
        );
    }

    Logout() {
        document.cookie = "session-member-record=; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
        return <Redirect to="/login" />;
    }
}
