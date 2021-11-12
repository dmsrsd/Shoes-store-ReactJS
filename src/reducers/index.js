import { combineReducers } from "redux";
import ReducerProductAPI from "./ReducerProductAPI";
import ProductShoesReducer from "../redux/product";

const rootReducer = combineReducers({
  ReducerProductAPI,
  ProductShoesReducer,
});

export default rootReducer;
