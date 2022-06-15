import React from "react"

function portfolioStock({ stocks, handleDelete }) {
    const { id, ticker, name, price } = stocks

    return (
        <div>
            <div className="card" onClick={() => handleDelete(stocks)} key={id}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{ticker}:{price}</p>
                </div>
            </div>
        </div>
    );
}


export default portfolioStock
