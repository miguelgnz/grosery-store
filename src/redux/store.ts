"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import productSlice from "./features/product-slice";

export const store = configureStore({
  reducer: { productSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
