"use client";
import { useState } from "react";

export default function List() {
  let 상품 = ["tomato", "Pasta", "Coconut"];
  let [foodNumber, SetFoodNumber] = useState([0, 1, 2]);
  return (
    <div className="main_container">
      <h3> Products List</h3>
      {상품.map((item, i) => {
        return (
          <div className="Product_List" key={i}>
            <img src={`/food${i}.png`} className="map_img" />
            <h4>{item} $40</h4>
            <span> {foodNumber[i]} </span>
            <button
              onClick={() => {
                let copy = [...foodNumber];
                copy[i]++;
                SetFoodNumber(copy);
              }}
            >
              버튼
            </button>
          </div>
        );
      })}
    </div>
  );
}
