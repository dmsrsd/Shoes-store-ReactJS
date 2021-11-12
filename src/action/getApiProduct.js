import axios from "axios";
import { API_URL, API_TIMEOUT } from "../utils/constant";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";

export const getDataProductList = () => {
  // console.log("DATANYA MASUUUK");
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "get",
      url: API_URL,
      timeout: API_TIMEOUT,
    })
      .then((response) => {
        if (response.status !== 200) {
          dispatch({
            type: GET_PRODUCT_LIST,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          // SUKSES GET
          console.log("GET DATA API, BERHASIL", response.data);
          dispatch({
            type: GET_PRODUCT_LIST,
            payload: {
              loading: false,
              data: response.data ? response.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch((error) => {
        //ERROR HANDLING
        dispatch({
          type: GET_PRODUCT_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
        alert(error);
      });
  };
};
