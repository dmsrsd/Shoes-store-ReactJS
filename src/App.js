import React from "react";
import { Provider } from "react-redux";
import store from "./reducers/store";
import MyRouter from "./router";
import { Header, MyNavbar } from "./templates";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MyNavbar />
        <MyRouter />
      </div>
    </Provider>
  );
};

export default App;
