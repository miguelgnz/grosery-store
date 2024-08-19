"use client";

import { Button, Input } from "@nextui-org/react";
import { FormEvent } from "react";
import { useState } from "react";

import { useAppDispatch } from "@/redux/store";
import { addProduct } from "@/redux/features/product-slice";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [stock, setStock] = useState(false);

  const dispatch = useAppDispatch();

  const isFormValid = () => {
    if (name === "" || category === "") {
      return false as boolean;
    }
    return true as boolean;
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name,
      category,
      price,
      stock,
    };

    dispatch(addProduct(payload));

    setName("");
    setCategory("");
    setPrice(undefined);
    setStock(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "8px",
          width: "400px",
        }}
      >
        <label>Product Name</label>
        <Input
          placeholder="Milk, Apple..."
          isInvalid={name === ""}
          errorMessage="Name cannot be empty"
          //   required
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Category</label>
        <Input
          placeholder="Food, Personal Care"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <label>Price</label>
        <Input
          placeholder="$"
          type="number"
          value={price?.toString()}
          onChange={(event) => {
            setPrice(Number(event.target.value));
          }}
        />
        <div>
          <select
            onChange={(event) => {
              setStock(event.target.value === "stock" ? true : false);
            }}
            // value={stock.toString()}
          >
            <option value={"stock"}>In Stock</option>
            <option value={"noStock"}>Out of Stock</option>
          </select>
        </div>
        <Button color="primary" type="submit" disabled={!isFormValid()}>
          Add Product
        </Button>
      </div>
    </form>
  );
}
