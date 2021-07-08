import React from "react";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Rate from "./Rate";

const FoodList = () => {
  const foods = useSelector((state) => state.allFoods.foods);
  const renderItems = foods?.data?.meals.map((meal) => {
    const { id, strMeal, strMealThumb, description, title, price, ratings } =
      meal;
    return (
      <div key={id} className="">
        <div className="card rounded-tr-3xl">
          <div className="img-box">
            <img src={strMealThumb} alt={title} className="card-img-top" />
          </div>
          <div className="p-5">
            <div className="flex justify-between pb-4 text-xl font-bold text-gray-700">
              <p>{strMeal}</p>
              <p>{price}</p>
            </div>
            <p className="text-gray-500 pb-6">
              {description.substring(0, 100)}...
            </p>
          </div>
          <div className="flex justify-between">
            <div className="pl-5 flex items-center">
              <Rate itemRate={ratings} />
            </div>
            <div className="icon text-white rounded-tl-3xl">
              <div className="py-5 px-10">
                <AddIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {renderItems ? (
        renderItems
      ) : (
        <h3 className="text-2xl font-bold">Data Loading...</h3>
      )}
    </div>
  );
};

export default FoodList;
