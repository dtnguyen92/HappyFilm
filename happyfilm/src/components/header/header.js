import React, { Component } from 'react';
import Logo from "./logo";
import Signup from "./signup";
import _header from "../../SASS/Components/Header/_header.scss"
import Login from './login';

export default class Header extends Component {
    render() {
        return (
            <div className="myHeader__bg container">
                <nav className="myHeader navbar navbar-expand-lg  d-flex justify-content-between">
                    <Logo />
                    <div className="row">
                        <Login />
                        <Signup />
                    </div>
                </nav>
            </div>
        )
    }
}