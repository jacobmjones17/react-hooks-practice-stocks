import React from "react";
import Stock from "./Stock";

function StockContainer({ addStock, sortedStocks }) {

  const stockItems = sortedStocks.map((stock) => (
    <Stock 
    key={stock.id}
    stocks={stock}
    addStock={addStock}
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stockItems}
    </div>
  );
}

export default StockContainer;
