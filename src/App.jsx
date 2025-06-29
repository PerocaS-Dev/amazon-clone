import "./App.css";
import { useContext, useEffect } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx"; // Make sure to import these
import Products from "./components/Products.jsx"; // Make sure to import these
import Header from "./components/Layout/Header.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Location from "./components/Location.jsx";
import Login from "./components/Login.jsx";
import OrdersAndReturns from "./components/OrdersAndReturns.jsx";
import Basket from "./components/Basket.jsx";
import Header_Menu from "./components/Layout/Header_Menu.jsx";
import NotFound from "./components/NotFound.jsx";
import ShoppingContext from "./context/shopping/shoppingContext";
import { auth } from "./Firebase.jsx";

function App() {
    const shoppingContext = useContext(ShoppingContext);
    const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is -> ", authUser);

      if(authUser){
        setUser(authUser)
      }else{
        setUser(null)
      }
    })
  }, [])
  return (
    <>
      <Header />
      <Header_Menu />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/location" component={Location} exact />
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route
            path="/orders-and-returns"
            component={OrdersAndReturns}
            exact
          />
          <Route path="/basket" component={Basket} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default App;
