// import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./context/shopping/ShoppingState.jsx";

ReactDOM.render(
  <BrowserRouter>
    <ShoppingState>
      <App />
    </ShoppingState>
  </BrowserRouter>,
  document.getElementById("root")
);

// createRoot(document.getElementById('root')).render(
//     <App />
