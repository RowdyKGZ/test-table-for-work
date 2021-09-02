import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductsContext";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ProductContextProvider>
  );
};

export default Routes;
