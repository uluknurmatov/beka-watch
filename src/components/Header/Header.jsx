import React, { useContext, useState } from "react";
import "./Header.css";
import Basket from "../../assets/img/bskt.png";
// import Menu from "../../assets/img/menu.jpg";
import { Link, useNavigate } from "react-router-dom";
import { watchContext } from "../../contexts/WatchContext";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { authContext } from "../../contexts/AuthContext";

const Header = () => {
    const navigate = useNavigate();
    const { search, searchData } = useContext(watchContext);
    const {currentUser,logoutUser} = useContext(authContext);
    // const navigate = useNavigate();
    const { searchValue, setSearchValue } = useState("");
    const [show, setShowResult] = useState(false);

    const handleValue = (e) => {
        if (e.target.value.length > 0) {
            setShowResult(true);
        } else {
            setShowResult(false);
        }
        search(e.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div class="logo">
                        <p>
                            <Link to="/">WBrand</Link>
                        </p>
                    </div>

                    <div class="navbar_right">
                        <ul class="navbar_item">
                            {/* <div>
                                <li className="item">
                                    <Link to="/add">Добавить </Link>
                                </li>
                            </div> */}
                            <div className="search">
                                <input
                                    onChange={handleValue}
                                    className="inp-search"
                                    placeholder="Поиск"
                                />
                                {show ? (
                                    <div className="search-result">
                                        {searchData.map((item) => (
                                            <Link to={`/details/${item.id}`}>
                                                <div className="search-item">
                                                    <div>
                                                        <img src={item.img} />
                                                    </div>
                                                    <div className="res_search">
                                                        {item.name}
                                                    </div>
                                                    <div className="res_search">
                                                        , {item.model}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div onClick={() => navigate("/cart")}>
                                <li className="item_icon">
                                    <img class="icon" src={Basket} alt="" />
                                </li>
                            </div>
                            <div>
                                {/* <li className="item_icon">
                                    <img class="icon" src={Menu} alt="" />
                                </li> */}
                                <div>
                                    <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MenuIcon
                                            style={{
                                                fontSize: 40,
                                                marginTop: -10,
                                            }}
                                        />
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                            {currentUser ? (
                                                <div className="log-in-out-container">
                                                <MenuItem
                                                style={{ color: "black" }}
                                                onClick={handleClose}
                                                >
                                                <p  className="log-in-out" onClick={logoutUser}>Выйти</p>
                                                
                                            </MenuItem>
                                            </div>
                                            ) : (
                                                <Link to="/login">
                                                <div onClick={() => navigate("/login")} className="log-in-out-container">
                                                <MenuItem
                                                style={{ color: "black" }}
                                                onClick={handleClose}
                                            >
                                                <p  className="log-in-out"> Войти</p>
                                               
                                            </MenuItem>
                                            </div>
                                        </Link>
                                            )}
                                            
                                        <Link to="/cart">
                                            <MenuItem
                                                style={{ color: "black" }}
                                                onClick={handleClose}
                                            >
                                                Корзина
                                            </MenuItem>
                                        </Link>
                                        <Link to="/favorites">
                                            <MenuItem
                                                style={{ color: "black" }}
                                                onClick={handleClose}
                                            >
                                                 Избранное
                                            </MenuItem>
                                        </Link>
                                        <Link to="/add">
                                            <MenuItem
                                                style={{ color: "black" }}
                                                onClick={handleClose}
                                            >
                                                
                                                Добавить товар
                                            </MenuItem>
                                        </Link>
                                    </Menu>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
