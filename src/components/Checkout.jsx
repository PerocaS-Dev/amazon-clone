import "./Checkout.css";
import { React, useContext } from "react";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  console.log("Basket contents:", basket); // Add this line
  console.log("User:", user); // Add this line
  
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="" alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title"> Your Shipping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id} // Add this line
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
