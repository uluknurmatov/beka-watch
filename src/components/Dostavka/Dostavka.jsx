import React from "react";
import { Link } from "react-router-dom";
import "./Dostavka.css";

const Dostavka = () => {
    return (
        <>
            <div className="container">
                <div className="cat_content">
                    <div className="det_nav">
                        <button className="back_det">
                            <Link to="/">Назад </Link>
                        </button>
                    </div>
                </div>
                <h1 className="foot_sh">Доставка</h1>
                <div className="dost_wrapper">
                    <div className="dost_block">
                        <h3>Стандартная доставка</h3>
                        <p>
                            Доставим заказ завтра при подтверждении заказа до
                            1800, если такая опция доступна при оформлении
                            Возможные интервалы доставки:
                        </p>
                        <ul>
                            <li>10:00 — 18:00</li>
                            <li>10:00 — 13:00</li>
                            <li>13:00 — 16:00</li>
                            <li>16:00 — 19:00</li>
                            <li>19:00 — 22:00</li>
                            <li>10:00 — 22:00</li>
                        </ul>
                        <p>Стоимость доставки — 350 сом</p>
                    </div>
                    <div className="dost_block">
                        <h3>
                            Доставка в день заказа (только в пределах Бишкека)
                        </h3>
                        <p>
                            Доставка сегодня возможна при оформлении заказа до
                            2000, только при предоплате на сайте. После того,
                            как курьер получит заказ на доставку, можно будет
                            отследить заказ в приложении YandexGo. Если
                            приложение не установлено, придет смс сообщение с
                            информацией о курьере. Стоимость срочной доставки:
                        </p>
                        <ul>
                            <li>в пределах Бишкека — 500 сом</li>
                            <li>за Бишкеком — 1 000 сом</li>
                        </ul>
                    </div>
                    <div className="dost_block">
                        <h3>Забрать в магазине</h3>
                        <p>
                            Забери свой заказ в одном из магазинов в г. Бишкек.
                            Если товар есть в наличии в выбранном магазине, то
                            уже через 30 минут после оформления.
                        </p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Dostavka;
