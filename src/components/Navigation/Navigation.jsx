/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import styles from "./Navigation.module.css";
import logoImage from "/src/assets/img/urban-cart-high-resolution-logo-white-transparent.png";
function Navigation({ items }) {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <img className={styles.logo} src={logoImage} alt="logo" />
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
