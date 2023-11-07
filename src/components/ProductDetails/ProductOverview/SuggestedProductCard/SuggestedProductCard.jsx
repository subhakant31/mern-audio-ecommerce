import "./SuggestedProductCard.scss";

function SuggestedProductCard(props) {
  return (
    <div className="suggested-product-card">
      <div className="suggested-product-card__image">
        <img
          src="./assets/images/productImages/suggestedProductImage1.png"
          alt="suggested product image"
        />
      </div>
      <h3 className="suggested-product-card__title">TMA-2 HD Wireless</h3>
      <span className="suggested-product-card__price">USD 350</span>
    </div>
  );
}

export default SuggestedProductCard;
