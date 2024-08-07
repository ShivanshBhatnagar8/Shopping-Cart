/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ items }) {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <img
            className={styles.logo}
            src="./src/assets/img/urban-cart-high-resolution-logo-white-transparent.png"
            alt="logo"
          />
          <div className={styles.links}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="products">
              Products
            </Link>
            <Link className={styles.link} to="cart">
              Cart
            </Link>
            <div>
              {items !== 0 ? (
                <div className={styles.cartItemCount}>{items}</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;
