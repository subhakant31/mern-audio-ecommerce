import React from "react";
import "./SortBy.scss";

const SortBy = () => {
  return (
    <div className="sort-by">
      <h3 className="sort-by__title">Sort By</h3>
      <ul className="sort-by__list">
        <li>
          <a href="" className="sort-by__list__item active">
            Popularity
          </a>
        </li>
        <li>
          <a href="" className="sort-by__list__item">
            Newest
          </a>
        </li>
        <li>
          <a href="" className="sort-by__list__item">
            Oldest
          </a>
        </li>
        <li>
          <a href="" className="sort-by__list__item">
            High Price
          </a>
        </li>
        <li>
          <a href="" className="sort-by__list__item">
            Low Price
          </a>
        </li>
        <li>
          <a href="" className="sort-by__list__item">
            Review
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortBy;
