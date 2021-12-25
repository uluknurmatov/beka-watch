import React, { useContext } from "react";
import "./SignUp.css";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";

const SignUp = () => {
    const { registerUser } = useContext(authContext);
    const navigate = useNavigate();

    let newUser = {};

    function handleInputChanges(event) {
        newUser = {
            ...newUser,
            [event.target.name]: event.target.value,
        };
    }

    return (
        <div className="sign-in__background">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <Link to="/login">
                        <h2 className="sign-in-btn inactive underlineHover">
                            {" "}
                            Sign In{" "}
                        </h2>
                    </Link>
                    <h2 className="sign-up-btn active">Sign Up </h2>

                    <div className="fadeIn first">
                        <ExitToAppIcon />
                    </div>

                    <form
                        onSubmit={(event) =>
                            registerUser(event, newUser, navigate)
                        }
                    >
                        <input
                            onChange={handleInputChanges}
                            type="text"
                            id="name"
                            className="sign-in-up-input fadeIn second"
                            name="name"
                            placeholder="name"
                        />
                        <input
                            onChange={handleInputChanges}
                            type="text"
                            id="email"
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
                            value="Register"
                        />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">
                            Registered?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
