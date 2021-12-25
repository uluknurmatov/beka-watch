import React from "react";
import "./Footer.css";
import Ms from "../../assets/img/mastercard.png";
import Visa from "../../assets/img/visa.png";
import Paypal from "../../assets/img/paypal.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_blog">
                        <div className="footer_subblog">
                            <div className="footer_title_pay">
                                Способ оплаты
                            </div>
                            <div className="footer_img">
                                <img src={Ms} alt="" />
                                <img src={Visa} alt="" />
                                <img src={Paypal} alt="" />

                                <li>Подписаться на рассылки</li>
                            </div>
                        </div>
                        <div className="footer_subblog">
                            <div className="footer_title">Помощь</div>

                            <li>
                                <Link to="/dostavka">Доставка</Link>
                            </li>
                            {/* <li>Возврат</li> */}
                            <li>
                                <Link to="/contacts">Связаться с нами</Link>
                            </li>
                        </div>
                        <div className="footer_subblog">
                            <div className="footer_title">Для клиентов</div>

                            <li>
                                <Link to="/size">Какой размер выбрать?</Link>
                            </li>
                            <li>Условия пользования</li>
                        </div>

                        <div className="footer_subblog">
                            <div className="footer_title_street">WBrand</div>
                            <li>
                                <Link to="/about">О нас</Link>
                            </li>
                            <li>
                                <Link to="vak">Вакансии</Link>
                            </li>
                            {/* <div className="social_net">
                            <img className="icon" src={Instagram} />
                            <img className="icon" src={Facebook} />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
