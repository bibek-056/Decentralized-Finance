import React from 'react'
import borrowgraphic from "../../src/assets/borrowgraphic.png";
import transfergraphic from "../../src/assets/transfergraphic.png";
import stakegraphic from "../../src/assets/stakegraphic.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Belt = () => {
    return (
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    <div className="card">
                        <img src={borrowgraphic} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Borrow</h5>
                            <p className="card-text">Deposit Ethereum as collateral and borrow USDT. Borrow rate is 8%. Rates are dynamic and subject to change according to amount of ethereum staked in the pool. Terms and conditions apply.</p>
                            <button className="btn_family_card">Borrow</button>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <img src={stakegraphic} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Stake</h5>
                            <p className="card-text">Stake USDT and earn interest. Stake rate is 7.5%. Rates are dynamic and subject to change according to amount of ethereum staked in the pool. Interest is paid automatically every week in ethereum account.</p>
                            <button className="btn_family_card">Stake</button>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <img src={transfergraphic} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Transfer</h5>
                            <p className="card-text">Transfer funds from your account to any other address easily and securely with gas fee of your choice. High gas fee equals faster transactions allowing you to perform even the most urgent transactions securely with ease.</p>
                            <button className="btn_family_card">Transfer</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>        
    )
}

export default Belt;
