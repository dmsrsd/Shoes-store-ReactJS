import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BagPage from "../pages/BagPage";
import DetailPage from "../pages/DetailPage";
import ProductPage from "../pages/ProductPage";

export default class MyRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ProductPage />
            </Route>

            <Route
              path="/detail/:name"
              children={(props) => <DetailPage {...props} />}
              // component={DetailPage}
            />

            <Route path="/bag">
              <BagPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
