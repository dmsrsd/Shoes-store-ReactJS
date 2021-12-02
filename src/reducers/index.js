import { combineReducers } from "redux";
import ReducerProductAPI from "./ReducerProductAPI";
import ProductShoesReducer from "../redux/product";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
//   whitelist: ["ProductShoesReducer"],
   blacklist: ["ProductShoesReducer"],
};

const rootReducer = combineReducers({
  ReducerProductAPI,
  ProductShoesReducer,
});

export default persistReducer(persistConfig, rootReducer);
