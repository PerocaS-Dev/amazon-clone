// import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./context/authContext.jsx";
import { ShoppingState } from "./context/shopping/ShoppingState.jsx";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShoppingState>
        <App />
      </ShoppingState>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// createRoot(document.getElementById('root')).render(
//     <App />
