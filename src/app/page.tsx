import ProductList from "@/components/ProductList";
import AddProduct from "@/components/AddProduct";

import styles from "@/styles/Home.module.css";
import Filters from "@/components/Filters";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "9rem",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "600",
        }}
      >
        Grosery Store
      </h1>
      <Filters />
      <div className={styles.mainDiv}>
        <AddProduct />
        <ProductList />
      </div>
    </div>
  );
}
