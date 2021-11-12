import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import MyRouter from "./router";
import { Header, MyNavbar } from "./templates";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Header />
          <MyNavbar />
          <MyRouter />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
