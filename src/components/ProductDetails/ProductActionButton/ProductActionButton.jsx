import "./ProductActionButton.scss";

function ProductActionButton(props) {
  const buttonText = props.buttonText;
  return (
    <div className="product-action-button-wrapper">
      <button className="product-action-button-wrapper__button">
        {buttonText}
      </button>
    </div>
  );
}
export default ProductActionButton;
