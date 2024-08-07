/* eslint-disable react/prop-types */
/* eslint-disable no-import-assign */
import styles from "./Cart.module.css";

function Cart({ cartProducts, deleteCartItem }) {
  return (
    <>
      <div>
        {cartProducts.length === 0 ? (
          <div className={styles.cartHeading}>
            <h1 className={styles.heading}>
              No item in the cart. Browse our products and add your favorites!
            </h1>
          </div>
        ) : (
          <div className={styles.cartContainer}>
            {cartProducts.map((item) => (
              <div className={styles.cartCard} key={item.id}>
                <div className={styles.cartImgContainer}>
                  <img
                    className={styles.cartImg}
                    src={item.image}
                    alt="image of the cart item"
                  />
                </div>
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>
                    <span>Item Name: </span>
                    {item.title}
                  </p>
                  <p className={styles.itemQuantity}>
                    <span>Quantity: </span>
                    {item.quantity}
                  </p>
                  <p className={styles.itemAmount}>
                    <span>Amount: </span> $ {item.quantity * item.price}
                  </p>
                  <button
                    id={item.id}
                    className={styles.deleteBtn}
                    onClick={(e) => deleteCartItem(e.target.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
