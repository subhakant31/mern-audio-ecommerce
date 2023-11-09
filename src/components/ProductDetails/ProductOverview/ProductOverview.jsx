import "./ProductOverview.scss";
import ProductImage from "../ProductImage/ProductImage";
import ReviewCard from "./ReviewCard/ReviewCard";
import SuggestedProductCard from "./SuggestedProductCard/SuggestedProductCard";
function ProductOverview(props) {
  const productId = props.id;
  return (
    <div className="product-overview" id={productId}>
      <ul className="product-overview__images-container">
        <ProductImage
          image={`./assets/images/productImages/productimage1.png`}
        ></ProductImage>
        <ProductImage
          image={`./assets/images/productImages/productimage1.png`}
        ></ProductImage>
        <ProductImage
          image={`./assets/images/productImages/productimage1.png`}
        ></ProductImage>
      </ul>
      <div className="product-overview__user-reviews">
        <h3 className="product-overview__user-reviews__heading">
          review (102)
        </h3>
        <ul className="product-overview__user-reviews__container">
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </ul>
      </div>
      <div className="product-overview__more-products">
        <div className="product-overview__more-products__heading-container">
          <h3 className="heading">another product</h3>
          <a href="#">see all</a>
        </div>
        <ul className="product-overview__more-products__more-product-list">
          <SuggestedProductCard></SuggestedProductCard>
          <SuggestedProductCard></SuggestedProductCard>
          <SuggestedProductCard></SuggestedProductCard>
          <SuggestedProductCard></SuggestedProductCard>
        </ul>
      </div>
    </div>
  );
}

export default ProductOverview;
