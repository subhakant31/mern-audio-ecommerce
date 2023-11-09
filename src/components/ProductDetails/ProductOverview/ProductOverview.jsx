import "./ProductOverview.scss";
import ProductImage from "../ProductImage/ProductImage";
import ReviewCard from "./ReviewCard/ReviewCard";
import MoreProducts from "../../MoreProducts/MoreProducts";
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
        </ul>
        <a
          href="/"
          aria-label="show more reviews"
          className="product-overview__user-reviews__see-more-reviews-btn"
        >
          See All Reviews
        </a>
      </div>
      <MoreProducts heading="more products"></MoreProducts>
    </div>
  );
}

export default ProductOverview;
