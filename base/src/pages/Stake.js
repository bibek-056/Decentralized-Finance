import React from "react";
import { EthContext } from "../context/Ethstate";
import { useContext } from "react";

const Stake = () => {

    const { metamaskConnect, account } = useContext(EthContext)

    return(
        <div>
        <div className="borrowform">
            <div className="guidelines">
                <h1>STAKE</h1>
                <ul>
                    <li>Stake USDT and earn interest.</li>
                    <li>Stake rate is 7.5%.</li>
                    <li>Rates are dynamic and subject to change according to amount of ethereum staked in the pool.</li>
                    <li>Interest is paid automatically every week in ethereum account.</li>
                </ul>

            </div>
            <hr className="hr_verticle"/>
            <div className="form">
                { (!account)?
                <div>
                    <div>
                        <h3> Seems like you have not connected your wallet.</h3>
                        <h2> Connect your meta mask wallet to deposit your assets and earn interest.</h2>
                    </div>
                    <button className="btn_family" onClick={(e)=>{metamaskConnect(e)}}>Connect your metamask wallet now.</button>
                </div>
                :
                <div>
                    <h4>Connected Wallet:</h4> {account} 
                    <hr/>
                    <div>
                        <label>Amount to Stake</label>
                        <input className="input_text" type="number" placeholder="Amount in USD" />
                    </div>
                    <div class="form-check">
                        <input className="input_checkbox" type="checkbox" value="" id="flexCheckDefault"/>
                        <label>
                            <p className="concent">I agree to the terms and conditions.</p>
                        </label>
                    </div>
                    <button className="dashbutton">Stake Now</button>
                </div>
                }
            </div>
        </div>
        <p> Value in account is : {account} </p>
        <hr />
        <h1> Stake Page</h1>
        <hr/>
    </div>
    )
}

export default Stake;
