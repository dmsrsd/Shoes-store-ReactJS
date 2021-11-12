const listProduct = {
  listProduct: [],
  listBag: [],
};

const productReducer = (state = listProduct, action) => {
  const { type, payload } = action;
  console.log(`payload`, payload);

  switch (type) {
    case "product_ok":
      return {
        ...state,
        listProduct: [...state.listProduct, payload],
      };
    case "detail_ok":
      return {
        ...state,
        listBag: [...state.listBag, payload.detailData],
      };
    default:
      return state;
  }
};

export default productReducer;
