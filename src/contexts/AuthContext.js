// import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
// import { AUTH_API, LOGIN_API, REGISTER_API } from "../helpers/Constants";
import app from "../base.js";
import { auth } from "../base.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth, 
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const INIT_STATE = {
  isAuth: false,
  currentUser: null,
  user: '',
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
      case "LOGIN_USER":
      return { ...state, user: action.payload };
    case "LOGOUT_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};



const AuthContextProvider = ({ children, props }) => {

  console.log(props);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "LOGIN_USER",
          payload: user,
        });
      } else {
        dispatch({
          type: "LOGOUT_USER",
          payload: '',
        });
      }
    });
  }, []);

  const createUserWithEmailAndPasswordHandler = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "LOGOUT_USER",
          payload: '',
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  let adminEmail = 'kubaismailov02@gmail.com';

  const loginUserWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(e);
    }
  };

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login'
    })
  }

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentUser, setCurrentUser] = useState(null);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      dispatch({
        type: "GET_CURRENT_USER",
        payload: user,
      });
      console.log(user);
    });
  }, []);

  async function registerUser(event, newUser) {
    event.preventDefault();
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
      navigate("/login");
      console.log(currentUser);
    } catch (err) {
      console.log(err);
    }
  }

  async function loginUser(event, userData) {
    event.preventDefault();
    try {
      const newUser = await app
        .auth()
        .signInWithEmailAndPassword(userData.email, userData.password);
    //   setCurrentUser(newUser.user);
    //   console.log(currentUser);
    //   dispatch({
    //     type: "GET_CURRENT_USER",
    //     payload: currentUser,
    //   });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  const logoutUser = async () => {
    try {
      await app.auth().signOut();
      console.log("User Logged Out!");
      dispatch({
        type: "GET_CURRENT_USER",
        payload: null,
      });
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <authContext.Provider
      value={{
        currentUser: state.currentUser,
        registerUser,
        loginUser,
        logoutUser,
        createUserWithEmailAndPasswordHandler,
        loginUserWithEmail,
        logOut,
        forgotPassword,
        user: state.user,
        adminEmail
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
