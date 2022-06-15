import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState("")
  const [category, setCategory] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((stocks) => setStocks(stocks))
  }, [])

  function addStock(stock) {
    if (!portfolio.includes(stock)) {
    setPortfolio([...portfolio, stock]);
    }
}

function handleDelete(stocks) {
  setPortfolio(portfolio.filter((myStock) => myStock.id != stocks.id))
}

const sortedStocks = stocks.sort((a, b) => {
  if(sort === "Alphabetically") {
    if(a.name < b.name) {
      return -1;
    }
    if(a.name > b.name) {
      return 1
    }
    return 0
  }

  if(sort === "Price") {
    if(a.price < b.price) {
      return -1;
    }
    if(a.price > b.price) {
      return 1
    }
    return 0
  }
}) .filter((stock) => {
  if(category === "All") return true
  return stock.type === category
})

console.log(category)

  return (
    <div>
      <SearchBar sortStocks={setSort} setCategory={setCategory} category={category}/>
      <div className="row">
        <div className="col-8">
          <StockContainer addStock={addStock} sortedStocks={sortedStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} portfolio={portfolio} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
