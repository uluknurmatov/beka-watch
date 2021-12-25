import React, { useContext, useEffect } from "react";
import { watchContext } from "../../contexts/WatchContext";

const Favorites = () => {
    const { cart, getCart, deleteFromCart } =
        useContext(watchContext);
    // const navigate = useNavigate();

    useEffect(() => {
        getCart();
    }, []);
    return (
        <div className="cart__container">
            <span>Избранное</span>
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
                    <span>Пусто</span>
                )}
                

                {/* {cart.watches.length > 0 ? (
                    <button
                        onClick={() => navigate("/order-form")}
                        className="cart__order-btn"
                    >
                        Оформить заказ
                    </button>
                ) : (
                    ""
                )} */}
            </div>
        </div>
    );
};

export default Favorites;