import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { watchContext } from "../../contexts/WatchContext";
import "./OrderForm.css";

const OrderForm = () => {
    let { cart, getCart } = useContext(watchContext);

    useEffect(() => {
        getCart();
    }, []);
    console.log(cart);

    return (
        <>
            <div className="order-form__container">
                <span className="order-form__title">Ваш заказ:</span>
                {cart.watches.map((elem) => (
                    <span key={elem.id} className="order-form__elem">
                        {elem.brand} | {elem.model} | {elem.sex} | {elem.color}{" "}
                        | Количество: {elem.count} | {elem.price}
                    </span>
                ))}
            </div>
            <span className="total-price">Итого: {cart.totalPrice} $</span>
            <div className="order-form__bottom">
                <Link to="/card" className="pay-btn">
                    Оплатить
                </Link>
            </div>
        </>
    );
};

export default OrderForm;
