import React from "react";
import { useSelector } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import StarHalfIcon from '@material-ui/icons/StarHalf';

const FoodList = () => {
  const foods = useSelector((state) => state.allFoods.foods);
  const renderItems = foods?.data?.meals.map((meal) => {
    const { id, strMeal, strMealThumb, description, title, price, ratings } =
      meal;
    return (
      <div key={id} className="">
        <div className="card ">
          <div className="img-box">
            <img src={strMealThumb} alt={title} className="card-img-top" />
          </div>
          <div className="card-body mt-3">
            <div className="d-flex justify-content-between">
              <h4 className="card-title">{strMeal}</h4>
              <h4 className="card-text">{price}</h4>
            </div>
            <p className="card-text">{description.substring(0, 100)}...</p>
            <div>
              {ratings}
              {Object.values({ ratings }).map((_, index) => {
                return <StarIcon key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {renderItems ? renderItems : <h3>Data Loading...</h3>}
    </div>
  );
};

export default FoodList;
