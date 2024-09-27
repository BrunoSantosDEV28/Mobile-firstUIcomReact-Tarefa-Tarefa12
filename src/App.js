// src/App.js
import React from "react";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const items = [
    { name: "Produto 1", price: 29.99, quantity: 2 },
    { name: "Produto 2", price: 15.49, quantity: 1 },
    { name: "Produto 3", price: 45.0, quantity: 3 },
    { name: "Produto 4", price: 10.0, quantity: 5 },
  ];

  return (
    <div>
      <ShoppingCart items={items} />
    </div>
  );
};

export default App;
