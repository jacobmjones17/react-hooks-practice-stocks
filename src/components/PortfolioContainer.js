import React, { useState } from "react";
import Stock from "./Stock";
import PortfolioStock from "./PortolioStock";

function PortfolioContainer({ portfolio, handleDelete }) {

  const portfolioItems = portfolio.map((stock) => (
    <PortfolioStock 
    key={stock.id}
    stocks={stock}
    handleDelete={handleDelete}
    />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioItems}
    </div>
  );
}

export default PortfolioContainer;
