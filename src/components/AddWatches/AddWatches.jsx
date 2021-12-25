import React, { useContext, useState } from "react";
import { watchContext } from "../../contexts/WatchContext";
import "./AddWatches.css";

const AddWatches = () => {
  const [watch, setWatch] = useState({
    name: "",
    model: "",
    price: "",
    gender: "",
    categories: "",
    description: "",
    img: "",
    SecondImg: "",
    ThirtyImg: "",
    FortyImg: "",
    FiftyImg: "",
    SixtyImg: "",
  });
  const { postNewWatch } = useContext(watchContext);

  const handleValues = (e) => {
    let newWatch = {
      ...watch,
      [e.target.name]: e.target.value,
    };
    setWatch(newWatch);
  };
  const handleClick = () => {
    postNewWatch(watch);
    setWatch({
      name: "",
      model: "",
      price: "",
      gender: "",
      categories: "",
      description: "",
      img: "",
      SecondImg: "",
      ThirtyImg: "",
      FortyImg: "",
      FiftyImg: "",
      SixtyImg: "",
    });
  };
  return (
    <div className="add_container">
      <div className="inps">
        <input
          className="inp-add"
          value={watch.name}
          name="name"
          onChange={handleValues}
          type="text"
          placeholder="Название"
        />
        <input
          className="inp-add"
          value={watch.model}
          name="model"
          onChange={handleValues}
          type="text"
          placeholder="Модель"
        />
        <input
          className="inp-add"
          value={watch.price}
          name="price"
          onChange={handleValues}
          type="number"
          placeholder="Цена"
        />{" "}
        <div className="add_block">
          <label>4)Sex:</label>
          <label className="label_first">Men</label>
          <input
            type="radio"
            name="gender"
            value="Men"
            onChange={handleValues}
          />
          <label className="label_add">Women</label>
          <input
            type="radio"
            name="gender"
            value="Women"
            onChange={handleValues}
          />
        </div>
        <div className="add_block">
          <label>5)Category:</label>
          <label className="label_first">Sport</label>
          <input
            type="radio"
            name="categories"
            value="Sport"
            onChange={handleValues}
          />
          <label className="label_add">Smart</label>
          <input
            type="radio"
            name="categories"
            value="Smart"
            onChange={handleValues}
          />
          <label className="label_add">Classic</label>
          <input
            type="radio"
            name="categories"
            value="Classic"
            onChange={handleValues}
          />
          <label className="label_add">Heritage</label>
          <input
            type="radio"
            name="categories"
            value="Heritage"
            onChange={handleValues}
          />
          <label className="label_add">Pocket</label>
          <input
            type="radio"
            name="categories"
            value="Pocket"
            onChange={handleValues}
          />
          <label className="label_add">Gold</label>
          <input
            type="radio"
            name="categories"
            value="Gold"
            onChange={handleValues}
          />
        </div>
        <input
          className="inp-add"
          value={watch.description}
          name="description"
          onChange={handleValues}
          type="text"
          placeholder="Описание"
        />
        <input
          className="inp-add"
          value={watch.img}
          name="img"
          onChange={handleValues}
          type="text"
          placeholder="Главная фотография"
        />
        <input
          className="inp-add"
          value={watch.SecondImg}
          name="SecondImg"
          onChange={handleValues}
          type="text"
          placeholder="2)Фотография"
        />
        <input
          className="inp-add"
          value={watch.ThirtyImg}
          name="ThirtyImg"
          onChange={handleValues}
          type="text"
          placeholder="3)Фотография"
        />
        <input
          className="inp-add"
          value={watch.FortyImg}
          name="FortyImg"
          onChange={handleValues}
          type="text"
          placeholder="4)Фотография"
        />
        <input
          className="inp-add"
          value={watch.FiftyImg}
          name="FiftyImg"
          onChange={handleValues}
          type="text"
          placeholder="5)Фотография"
        />
        <input
          className="inp-add"
          value={watch.SixtyImg}
          name="SixtyImg"
          onChange={handleValues}
          type="text"
          placeholder="6)Фотография"
        />
        <button className="btn-add" onClick={handleClick}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddWatches;
