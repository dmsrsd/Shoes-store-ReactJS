import { GET_PRODUCT_LIST } from "../../action/getApiProduct";

const intialState = {
  getProductListLoading: false,
  getProductListResult: false,
  getProductListError: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      console.log("REDUCER PRODUCT LIST", action);
      return {
        ...state,
        getProductListLoading: action.payload.loading,
        getProductListResult: action.payload.data,
        getProductListError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
