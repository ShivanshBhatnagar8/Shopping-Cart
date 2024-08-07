/* eslint-disable react/prop-types */
/* eslint-disable no-import-assign */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

function Products({
  error,
  products,
  handleChange,
  handleDecrement,
  handleIncrement,
  addProductInCart,
}) {
  return (
    <>
      <div>
        {error !== "" ? (
          <div className={styles.errorMsgContainer}>
            <p className={styles.errorMsg}>{error}</p>
          </div>
        ) : (
          <div>
            <ProductCard
              products={products}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              handleChange={handleChange}
              addCart={addProductInCart}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
