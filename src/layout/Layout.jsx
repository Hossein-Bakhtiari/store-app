import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./layout.module.css";
import { useCart } from "../context/CartContext";
function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping App</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
    </>
  );
}

export default Layout;
