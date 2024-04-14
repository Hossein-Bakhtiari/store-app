import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import styles from "./ProductsPage.module.css";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  
  useEffect(() => {
    setDisplayed(products)
  }, [products]);

  const searchHndler = () => {
    console.log("search");
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    console.log(category);
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
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Elctronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Woman's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
