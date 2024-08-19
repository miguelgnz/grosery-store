"use client";

import { useAppSelector } from "@/redux/store";
import Product from "./Product";

export default function ProductList() {
  const prodList = useAppSelector((state) => state.productSlice.value);
  const toggleInStock = useAppSelector((state) => {
    return state.productSlice.toggleInStock;
  });

  const filteredProds = toggleInStock ? prodList.filter((prod) => { 
    return prod.stock
   }) : prodList

  return (
    <div style={{ width: "500px" }}>
      {/* <h1>List of Products</h1> */}
      {filteredProds.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {filteredProds.map((prod, index) => {
            return (
              <Product
                key={index}
                name={prod.name}
                category={prod.category}
                price={prod.price}
                stock={prod.stock}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
