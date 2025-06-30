import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingContext from "../../context/shopping/shoppingContext";
import "./Header.css";
import { auth, db } from "../../Firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header_logo"
        />
      </Link>

      <Link to="/location">
        <div className="header_location">
          <div className="location_icon">
            <LocationOnOutlinedIcon className="location_on" />
          </div>
          <div className="header_location_option">
            <span className="current_location">
              Delivering to Cape Town 8001
            </span>
            <span className="update_location">Update loction</span>
          </div>
        </div>
      </Link>

      <div className="header_search">
        <select className="search_dropdown" name="All" id="All" defaultValue="">
          <option value="" disabled hidden>
            All
          </option>
          <option value="departments">All Departments</option>
          <option value="Arts">Arts, Crafts and Sewing</option>
          <option value="Baby">Baby</option>
          <option value="Beauty">Beauty</option>
          <option value="Books">Books</option>
        </select>
        <input
          className="header_input"
          type="text"
          placeholder="Search Amazon.co.za"
        />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders-and-returns">
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_option_basket">
            <div className="basket_icon">
              <AddShoppingCartIcon className="shopping_cart" fontSize="large" />
            </div>
            <div className="basket_label">
              <span className="header_optionTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
