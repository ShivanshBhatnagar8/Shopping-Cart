import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import heroImage from "/src/assets/img/hero.jpg";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home}>
          <div className={styles.homeText}>
            <h1>Find Your Favorites, Shop with Ease</h1>
            <span className={styles.heroText}>
              Browse our curated collection of top products, enjoy effortless
              shopping, and benefit from speedy delivery. We make shopping
              simple and enjoyable.
            </span>
            <div className={styles.buttons}>
              <Link className={styles.getStartedBtn} to="products">
                Get Started
              </Link>
              <Link className={styles.cartBtn} to="cart">
                Go to Cart
              </Link>
            </div>
          </div>
          <img
            className={styles.heroImg}
            src={heroImage}
            alt="Image of a lady with clothes"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
