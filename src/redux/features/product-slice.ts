import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@/utils/types";

interface InitialStateType {
  value: ProductType[];
  toggleInStock: boolean;
}

const initialState: InitialStateType = {
  value: [
    {
      name: "Spaghetti",
      category: "Pasta",
      price: 5,
      stock: true,
    },
    {
      name: "Almond Milk",
      category: "Dairy Alternatives",
      price: 4,
      stock: false,
    },
    {
      name: "Granola Bars",
      category: "Snacks",
      price: 3,
      stock: true,
    },
    {
      name: "Shampoo",
      category: "Personal Care",
      price: 7,
      stock: true,
    },
    {
      name: "Rice",
      category: "Grains",
      price: 2,
      stock: true,
    },
    {
      name: "Toothpaste",
      category: "Personal Care",
      price: 6,
      stock: false,
    },
    {
      name: "Oatmeal",
      category: "Breakfast",
      price: 3,
      stock: true,
    },
    {
      name: "Tomato Sauce",
      category: "Canned",
      price: 2,
      stock: false,
    },
    {
      name: "Peanut Butter",
      category: "Spreads",
      price: 5,
      stock: true,
    },
    {
      name: "Olive Oil",
      category: "Cooking",
      price: 8,
      stock: true,
    },
  ],
  toggleInStock: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    toggleStock: (state) => {
      console.log("reducer");
      state.toggleInStock = !state.toggleInStock;
      console.log(state.toggleInStock)
    },
  },
});

export const { addProduct, toggleStock } = productSlice.actions;

export default productSlice.reducer;
