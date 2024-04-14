import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import styles from "./ProductsPage.module.css";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const products = useProducts();
  console.log(products);

  const searchHndler = () => {
    console.log("search");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHndler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
