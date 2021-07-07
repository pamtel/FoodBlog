import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setFoods } from "../redux/actions/FoodActions";
import FoodList from "./FoodList";

const FoodDetails = () => {
  const foods = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchFoods = async () => {
    const response = await axios
      .get("https://asm-dev-api.herokuapp.com/api/v1/food")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setFoods(response.data));
  };

  useEffect(() => {
    fetchFoods();
  });
  console.log("foods :", foods);
  return (
    <div className="py-5 px-5 md:px-10 lg:px-20">
      <FoodList />
    </div>
  );
};

export default FoodDetails;
