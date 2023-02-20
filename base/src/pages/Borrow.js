import React, { useContext, useState } from "react";
import { EthContext } from "../context/Ethstate";
import { Link } from "react-router-dom";

const Borrow = () => {

    const { metamaskConnect, account } = useContext(EthContext)

    const [amount, setAmount] = useState('')
    const [time, setTime] = useState('')

    const borrowConfirm = (_amount, _time) => {
        return (
            <div> <p>You entered {_amount} amount and {_time} years.</p></div>
        )
    }

    return(
        <div>
        <div className="borrowform">
            <div className="guidelines">
                <h1>BORROW</h1>
                <ul>
                    <li>Deposit Ethereum as collateral and borrow USDT.</li>
                    <li>Borrow rate is 8%.</li>
                    <li>Assest will be liquidated if interest not paid on time or value of collateral drops below borrow rate.</li>
                    <li>Rates are dynamic and subject to change according to amount of ethereum staked in the pool.</li>
                </ul>

            </div>
            <hr className="hr_verticle"/>
            <div className="form">
                { (!account)?
                <div>
                    <div>
                        <h3> Seems like you have not connected your wallet.</h3>
                        <h2> Connect your meta mask wallet to view your dashboard.</h2>
                    </div>
                    <button className="btn_family" onClick={(e)=>{metamaskConnect(e)}}>Connect your metamask wallet now.</button>
                </div>
                :
                <div>
                    <h4>Connected Wallet:</h4> {account} 
                    <hr/>
                    <div>
                        <label>Amount to Borrow</label>
                        <input
                            className="input_text"
                            type="number"
                            placeholder="Amount in USD"
                            onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div>
                        <label>Time Period of the loan</label>
                        <input
                            className="input_text"
                            type="number"
                            placeholder="in year(s)"
                            onChange={(e) => setTime(e.target.value)}/>
                    </div>
                    <div class="form-check">
                        <input
                            className="input_checkbox"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"/>
                        <label>
                            <p className="concent">I agree to the terms and conditions.</p>
                        </label>
                    </div>
                    <Link to={{ 
                        pathname: "/borrow/borrowconfirm",
                        search: `?amount=${amount}&time=${time}`
                        }}>
                        <button className="dashbutton">Borrow Now</button>
                    </Link>
                </div>
                }
            </div>
        </div>
        <p> Value in account is : {account} </p>
        <hr />
        <h1> Borrow Page</h1>
        <hr/>
    </div>
    )
}

export default Borrow;
