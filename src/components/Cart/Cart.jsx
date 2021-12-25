import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { watchContext } from "../../contexts/WatchContext";
import "./Cart.css";

const Cart = () => {
    const { cart, getCart, changeCount, deleteFromCart } =
        useContext(watchContext);
    const navigate = useNavigate();

    useEffect(() => {
        getCart();
    }, []);
    return (
        <div className="cart__container">
            <span>Корзина</span>
            <div className="cart__items">
                {cart.watches.length > 0 ? (
                    cart.watches.map((elem) => (
                        <div key={elem.id} className="cart__element">
                            <img
                                className="cart__image"
                                src={elem.img}
                                alt="shoe-photo"
                            />
                            <span>{elem.name}</span>
                            <span>Модель: {elem.model}</span>

                            <span>
                                Количество:
                                <input
                                    onChange={(event) =>
                                        changeCount(event.target.value, elem.id)
                                    }
                                    className="cart__shoes-count"
                                    value={elem.count}
                                    type="number"
                                />
                            </span>
                            <span>Цена: {elem.price}</span>
                            <span
                                onClick={() => deleteFromCart(elem.id)}
                                className="cart__delete-btn"
                            >
                                Удалить
                            </span>
                        </div>
                    ))
                ) : (
                    <span>Корзина пуста</span>
                )}
                <span className="cart__total-price">
                    Общая сумма: {cart.totalPrice} $
                </span>

                {cart.watches.length > 0 ? (
                    <button
                        onClick={() => navigate("/order-form")}
                        className="cart__order-btn"
                    >
                        Оформить заказ
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Cart;
