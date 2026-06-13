
import React, { useState, useContext } from "react";


import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";



const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const generalContext = useContext(GeneralContext);
const handleSellClick = async () => {
  try {
    const res = await axios.get("https://stock-epyn.onrender.com/allHoldings");

    const holdingQty =
      res.data.find((holding) => holding.name === uid)?.qty || 0;

    if (holdingQty >= Number(stockQuantity)) {
      await axios.post("https://stock-epyn.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        mode: "SELL",
        price:100,
      });

      console.log("Sell order placed");
    } else {
      alert("Not enough shares to sell");
    }

    generalContext.closeSellWindow();
  } catch (err) {
    console.error(err);
  }
};
  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
         
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;





