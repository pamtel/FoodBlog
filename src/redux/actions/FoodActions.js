import { ActionTypes } from "../constants/ActionTypes"

export const setFoods = (foods) => {
    return {
        type: ActionTypes.SET_FOODS,
        payload: foods,
    }
}

export const selectedfood = (food) => {
    return {
        type: ActionTypes.SELECTED_FOOD,
        payload: food,
    }
}