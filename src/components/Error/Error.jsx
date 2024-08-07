/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import styles from "./Error.module.css";
const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oops! The page you are looking for does not exist.</h1>
      <Link to="/" className={styles.errorText}>
        Please check the URL or return to the homepage.
      </Link>
    </div>
  );
};

export default Error;
