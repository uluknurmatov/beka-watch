import React, { useContext, useState } from "react";
import "./SignIn.css";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";
import { CircularProgress } from "@material-ui/core";

const SignIn = () => {
    const { currentUser, loginUser, logoutUser } = useContext(authContext);
    const [pending, setPending] = useState(false);
    const navigate =useNavigate();

    let userData = {};

    function handleInputChanges(event) {
        userData = {
            ...userData,
            [event.target.name]: event.target.value,
        };
    }

    function handleSubmit(event) {
        loginUser(event, userData);
        setPending(true);
    }

    return !pending ? (
        <div className="sign-in__background">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="sign-in-btn active"> Sign In </h2>
                    <Link to="/regist">
                        <h2 className="sign-up-btn inactive underlineHover">
                            Sign Up
                        </h2>
                    </Link>

                    <div className="fadeIn first">
                        <ExitToAppIcon />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChanges}
                            type="text"
                            id="login"
                            className="sign-in-up-input fadeIn second"
                            name="email"
                            placeholder="email"
                        />
                        <input
                            onChange={handleInputChanges}
                            type="password"
                            id="password"
                            className="sign-in-up-input fadeIn third"
                            name="password"
                            placeholder="password"
                        />
                        <input 
                        
                            type="submit"
                            className="fadeIn fourth"
                            value="Log In"
                        />
                    </form>

                    <div id="formFooter">
                        <a
                            className="underlineHover sign-in-up-subtext"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="sign-in__background">
            <div className="wrapper fadeInDown">
                <CircularProgress color="primary" />
            </div>
        </div>
    );
};

export default SignIn;
