"use client";
import { Switch, toggle } from "@nextui-org/react";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { toggleStock } from "@/redux/features/product-slice";

export default function Filters() {
  const dispatch = useAppDispatch();

  const toogleSwitch = useAppSelector((state) => {
    return state.productSlice.toggleInStock;
  });

  return (
    <div>
      <label>Show in stock</label>
      <input
        type="checkbox"
        checked={toogleSwitch}
        onChange={() => {
          dispatch(toggleStock());
        }}
      />
    </div>
  );
}
