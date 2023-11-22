import React from "react";
import "./ResultsPage.scss";
import TitleComp from "../../components/TitleComp/TitleComp";
import PageHeaders from "../../components/PageHeaders/PageHeaders";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
import SuggestedProductCard from "../../components/ProductDetails/ProductOverview/SuggestedProductCard/SuggestedProductCard";
import {
  faChevronLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function ResultsPage() {
  return (
    <>
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state=""
        title=" "
        rightIcon={faCartShopping}
      ></TitleComp>
      <PageHeaders heading="headphone" subHeading="TMA Wireless"></PageHeaders>
      <FilterCategory />
      <SuggestedProductCard
        productName="TMA-2 HD Wireless"
        productPrice={350}
        hasRatingDetails={true}
      />
    </>
  );
}
export default ResultsPage;
