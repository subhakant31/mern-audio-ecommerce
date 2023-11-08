import "./ProductSpecification.scss";
import ProductSpecificationList from "./ProductSpecificationList/ProductSpecificationList";
function ProductSpecification(props) {
  return (
    <div className="product-specification">
      <h3 className="product-specification__title">in-depth specification</h3>
      <ProductSpecificationList></ProductSpecificationList>
    </div>
  );
}

export default ProductSpecification;
