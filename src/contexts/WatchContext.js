import axios from "axios";
import React, { useReducer } from "react";
import { JSON_API, countPrice } from "../components/helpers/Constants";
import { useNavigate } from "react-router-dom";

export const watchContext = React.createContext();

const INIT_STATE = {
    watchesData: [],
    watchDetails: {},
    paginationPages: 1,
    searchData: [],
    cart: {
        watches: [],
        totalPrice: 0,
    },
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_WATCHES":
            return {
                ...state,
                watchesData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 6
                ),
            };
        case "GET_WATCHES_DETAILS":
            return { ...state, watchDetails: action.payload };
        case "SEARCH":
            return { ...state, searchData: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        default:
            return { ...state };
    }
};

const WatchContextProvider = ({ children }) => {
    let navigate = useNavigate();
    function postNewWatch(watch) {
        axios.post(" http://localhost:8000/watches", watch);
    }

    async function getWatches() {
        // console.log(navigate);
        const search = new URLSearchParams(window.location.search);
        search.set("_limit", 6);
        navigate(`${window.location.pathname}?${search.toString()}`);

        let res = await axios.get(`${JSON_API}${window.location.search}`);
        dispatch({
            type: "GET_WATCHES",
            payload: res,
        });
    }
    async function getWatchDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/watches/${id}`);
        dispatch({
            type: "GET_WATCHES_DETAILS",
            payload: data,
        });
    }
    async function deleteWatches(id) {
        await axios.delete(`http://localhost:8000/watches/${id}`);
        getWatches();
        // dispatch({
        //     type: "GET_WATCHES",
        //     payload: res,
        // });
    }

    async function saveWatch(id, newWatch) {
        await axios.patch(`http://localhost:8000/watches/${id}`, newWatch);
        getWatchDetails(id);
    }
    async function search(value) {
        let { data } = await axios.get(
            `http://localhost:8000/watches?q=${value}`
        );
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }
    function addToCart(item) {
        item.count = 1;
        item.subPrice = item.price;
        let cart = JSON.parse(localStorage.getItem("WBrand"));
        if (!cart) {
            cart = {
                watches: [],
                totalPrice: 0,
            };
        }
        let isAddedToCart = cart.watches.filter((elem) => elem.id === item.id);
        if (isAddedToCart.length > 0) {
            cart.watches = cart.watches.filter((elem) => elem.id !== item.id);
        } else {
            cart.watches.push(item);
        }
        cart.totalPrice = countPrice(cart.watches);
        localStorage.setItem("WBrand", JSON.stringify(cart));

        getCart();
    }
    function getCart() {
        let cart = JSON.parse(localStorage.getItem("WBrand"));
        if (!cart) {
            cart = {
                watches: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
    }
    function checkShoeInCart(id) {
        let cart = JSON.parse(localStorage.getItem("WBrand"));
        if (!cart) {
            cart = {
                watches: [],
                totalPrice: 0,
            };
        }
        let isInCart = cart.watches.filter((elem) => elem.id === id);
        return isInCart.length > 0 ? true : false;
    }

    function changeCount(count, id) {
        if (count < 1) return;
        let cart = JSON.parse(localStorage.getItem("WBrand"));
        cart.watches = cart.watches.map((elem) => {
            if (elem.id == id) {
                elem.count = count;
                elem.subPrice = elem.price * count;
            }
            return elem;
        });
        cart.totalPrice = countPrice(cart.watches);
        localStorage.setItem("WBrand", JSON.stringify(cart));
        getCart();
    }
    function deleteFromCart(id) {
        let cart = JSON.parse(localStorage.getItem("WBrand"));
        cart.watches = cart.watches.filter((elem) => elem.id != id);
        cart.totalPrice = countPrice(cart.watches);
        localStorage.setItem("WBrand", JSON.stringify(cart));
        getCart();
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    return (
        <watchContext.Provider
            value={{
                watchesData: state.watchesData,
                watchDetails: state.watchDetails,
                searchData: state.searchData,
                paginationPages: state.paginationPages,
                cart: state.cart,
                postNewWatch,
                getWatches,
                deleteWatches,
                getWatchDetails,
                saveWatch,
                search,
                getCart,
                addToCart,
                checkShoeInCart,
                changeCount,
                deleteFromCart,
            }}
        >
            {children}
        </watchContext.Provider>
    );
};
export default WatchContextProvider;
