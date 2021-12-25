import React from "react";
import "./Categories.css";
import Classic from "../../assets/img/classic.jpg";
import Sport from "../../assets/img/sport_watch.jpg";
import Har from "../../assets/img/har.jpg";
import Smart from "../../assets/img/smart1.jpg";
import Pocket from "../../assets/img/pocket.jpg";
import Gold from "../../assets/img/gold.webp";

const Categories = () => {
    return (
        <div>
            <div class="categories">
                <h3 className="title">OUR CATEGORIES</h3>

                <div class="categoties_wrapper">
                    <div class="blocks_categories">
                        <img class="img_categories" src={Classic} alt="" />
                        <h4 class="title_categories">CLASSIC</h4>
                    </div>
                    <div class="blocks_categories">
                        <img class="img_categories" src={Sport} alt="" />
                        <h4 class="title_categories">SPORT</h4>
                    </div>
                    <div class="blocks_categories">
                        <img class="img_categories" src={Har} alt="" />
                        <h4 class="title_categories">HERITAGE</h4>
                    </div>
                    <div class="blocks_categories">
                        <img class="img_categories" src={Smart} alt="" />
                        <h4 class="title_categories">SMART</h4>
                    </div>
                    <div class="blocks_categories">
                        <img class="img_categories" src={Pocket} alt="" />
                        <h4 class="title_categories">POCKET</h4>
                    </div>
                    <div class="blocks_categories">
                        <img class="img_categories" src={Gold} alt="" />
                        <h4 class="title_categories">GOLD</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
