import React from "react";
import "./Category.scss";

const Category = () => {
  return (
    <div className="category">
      <h3 className="category__title">Category</h3>
      <ul className="category__list">
        <li>
          <a href="" className="category__list__item active">
            Headphone
          </a>
        </li>
        <li>
          <a href="" className="category__list__item">
            Headband
          </a>
        </li>
        <li>
          <a href="" className="category__list__item">
            Earpads
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
