import React from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import styles from "./ProductsPage.module.css";
function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
