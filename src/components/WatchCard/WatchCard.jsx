import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { watchContext } from "../../contexts/WatchContext";
import "./WatchCard.css";
import Delete from "../../assets/img/delete.png";
import Basket from "../../assets/img/basket.png";
import Favorites from '../../assets/img/bookmark.png';

const WatchCard = ({ item }) => {
    const { deleteWatches, addToCart, checkShoeInCart } =
        useContext(watchContext);
    return (
        <div className="block_one">
            <Link to={`/details/${item.id}`}>
                <div className="card">
                    <div className="card_img">
                        <img src={item.img} />
                    </div>
                    <div id="a" className="card_name">
                        <p>
                            {item.name} {item.model}
                        </p>
                    </div>
                    <div className="card_name">
                        <p>{item.price} сом</p>
                    </div>
                </div>
            </Link>
            <div className="icon_card_func">
                <img
                    style={{
                        backgroundColor: checkShoeInCart(item.id)
                            ? "gray"
                            : "white",
                    }}
                    onClick={() => addToCart(item)}
                    className="icon_card"
                    src={Basket}
                />
                <img
                    onClick={() => deleteWatches(item.id)}
                    className="icon_card"
                    src={Delete}
                />
                <img
                    onClick={() => addToCart(item)}
                    className="icon_card"
                    src={Favorites}
                />
            </div>
        </div>
    );
};

export default WatchCard;
