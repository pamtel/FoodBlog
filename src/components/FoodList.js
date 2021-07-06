import React from "react";
import { useSelector } from "react-redux";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const FoodList = () => {
 const getRatings = () => {
    
 }
  const foods = useSelector((state) => state.allFoods.foods);
  const renderItems = foods?.data?.meals.map((meal) => {
    const { id, strMeal, strMealThumb, description, title, price, ratings } =
      meal;
    return (
      <div key={id}>
        <div>
          <img src={strMealThumb} alt={title} />
        </div>
        <div className="content">
          <div>
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <h3>{strMeal}</h3>
          <p>{description}</p>
          <div>{ratings} {getRatings()}</div>
        </div>
      </div>
    );
  });
  return <div>{renderItems ? renderItems : <h3>Oops!! No Food Data</h3> }</div>;
};

export default FoodList;
