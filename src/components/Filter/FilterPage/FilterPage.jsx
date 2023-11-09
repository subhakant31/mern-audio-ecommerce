import React from "react";
import Category from "./../Category/Category";
import "./FilterPage.scss";
import SortBy from "./../SortBy/SortBy";
import PriceRange from "./../PriceRange/PriceRange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FilterPage = () => {
  return (
    <div className="filter-page">
      <div className="filter-page__header">
        <h2 className="filter-page__header__title">Filter</h2>
        <button className="filter-page__header__close">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <Category />
      <SortBy />
      <PriceRange />
      <button className="filter-page__btn-apply">Apply Filter</button>
    </div>
  );
};

export default FilterPage;
