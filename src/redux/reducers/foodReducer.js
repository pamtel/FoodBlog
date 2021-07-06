import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  foods: [],
};

export const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FOODS:
      return {...state, foods: payload};

    default:
      return state;
  }
};
