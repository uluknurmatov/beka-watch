import React from "react";
import Categories from "../Categories/Categories";
import Sidebar from "./Sidebar";
import MainVideo from "../Video/Video";
import WatchList from "../WatchList/WatchList";

const HomePage = (props) => {
    return (
        <div>
            <MainVideo />
            <div className="container">
                <Sidebar {...props} />
                <WatchList />
                <Categories />
            </div>
        </div>
    );
};

export default HomePage;
