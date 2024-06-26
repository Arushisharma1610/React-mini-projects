import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <ToastContainer />
  </div>
);


