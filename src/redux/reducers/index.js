import { combineReducers } from "redux";
import { foodReducer } from "./foodReducer";

const reducers = combineReducers({
    allFoods : foodReducer,
});

export default reducers;
