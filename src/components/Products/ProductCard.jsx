/* eslint-disable react/prop-types */
import styles from "./Products.module.css";

function ProductCard({
  products,
  onIncrement,
  onDecrement,
  handleChange,
  addCart,
}) {
  return (
    <>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img
              className={styles.productImg}
              src={product.image}
              alt="product image"
            />
            <p className={styles.productName}>{product.title}</p>
            <p className={styles.price}>$ {product.price}</p>
            <div className={styles.btnContainer}>
              <button
                className={styles.quantityBtn}
                data-id={product.id}
                onClick={(e) => onDecrement(e.target)}
              >
                -
              </button>
              <input
                type="number"
                min={0}
                max={10}
                data-id={product.id}
                value={product.quantity}
                onChange={(e) =>
                  handleChange(e.target.value, e.target.dataset.id)
                }
              ></input>
              <button
                className={styles.quantityBtn}
                data-id={product.id}
                onClick={(e) => onIncrement(e.target)}
              >
                +
              </button>
            </div>
            <button
              className={styles.cardBtn}
              id={product.id}
              onClick={(e) => addCart(e.target.id)}
            >
              Add to Cart
            </button>
            <p className={styles.quantityMessage}>
              {product.isClicked ? "Select at least one item" : ""}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
