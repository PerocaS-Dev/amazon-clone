import "./App.css";
import { useContext, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx"; // Make sure to import these
import Products from "./components/Products.jsx"; // Make sure to import these
import Header from "./components/Layout/Header.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Login from "./components/Login.jsx";
import OrdersAndReturns from "./components/OrdersAndReturns.jsx";
import Header_Menu from "./components/Layout/Header_Menu.jsx";
import NotFound from "./components/NotFound.jsx";
import ShoppingContext from "./context/shopping/shoppingContext";
import Checkout from "./components/Checkout.jsx";
import Payment from "./components/Payment.jsx"
import { auth } from "./Firebase.jsx";

const promise = loadStripe('pk_test_51RfgcsQ1mZOoMSBy7jwU8fdRvv6r0nIloBJWfzw621ZDh5LDgm0IEKbnDrKTEz5bj3rOLr7viHWZxZuQnd26AQrb00Lxxt5W6L')

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
          <Route path="/checkout" component={Checkout} exact></Route>
          <Route path="/payment">
          <Elements stripe={promise}><Payment/></Elements>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route
            path="/orders-and-returns"
            component={OrdersAndReturns}
            exact
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default App;
