import "./ProductDescriptionPage.scss";
import React, { useState } from "react";
import ProductOverview from "../../components/ProductDetails/ProductOverview/ProductOverview";
import ProductFeatures from "../../components/ProductDetails/ProductFeatures/ProductFeatures";
import ProductSpecification from "../../components/ProductDetails/ProductSpecification/ProductSpecification";
function ProductDescriptionPage(props) {
  const [selectedNavItem, setSelectedNavItem] = useState("overview");

  const setActive = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div className="product-description">
      <span className="product-description__price">USD 350</span>
      <h2 className="product-description__title">
        tma-2 <br></br> hd wireless
      </h2>
      <div className="product-description__contents">
        <nav className="product-description__contents__nav">
          <ul className="list">
            <li className="list__item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive("overview");
                }}
                className={selectedNavItem === "overview" ? "active" : ""}
              >
                overview
              </a>
            </li>
            <li className="list__item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive("features");
                }}
                className={selectedNavItem === "features" ? "active" : ""}
              >
                features
              </a>
            </li>
            <li className="list__item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive("specification");
                }}
                className={selectedNavItem === "specification" ? "active" : ""}
              >
                specification
              </a>
            </li>
          </ul>
        </nav>

        {selectedNavItem === "overview" ? <ProductOverview /> : <></>}
        {selectedNavItem === "features" ? <ProductFeatures /> : <></>}
        {selectedNavItem === "specification" ? <ProductSpecification /> : <></>}
      </div>
      
      <button className="product-description__add-to-cart-btn">
        add to cart
      </button>
    </div>
  );
}

export default ProductDescriptionPage;
