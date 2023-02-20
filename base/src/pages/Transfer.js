import React, { useContext } from "react";
import { EthContext } from "../context/Ethstate";

const Transfer = () => {

    const { metamaskConnect, account } = useContext(EthContext)

    return(
        <div>
        <div className="borrowform">
            <div className="guidelines">
                <h1>TRANSFER</h1>
                <ul>
                    <li>Transfer funds from your account to any other address easily and securely.</li>
                    <li>High gas fee equals faster transactions.</li>
                    <li>Gas fees are deducted automaticallys from your wallet when the transfer transaction is performed.</li>
                    <li>Gas fees can be dynamic depending on the amount of transaction traffic.</li>
                </ul>

            </div>
            <hr className="hr_verticle"/>
            <div className="form">
                { (!account)?
                <div>
                    <div>
                        <h3> Seems like you have not connected your wallet.</h3>
                        <h2> Connect your meta mask wallet to transfer funds.</h2>
                    </div>
                    <button className="btn_family" onClick={(e)=>{metamaskConnect(e)}}>Connect your metamask wallet now.</button>
                </div>
                :
                <div>
                    <h4>Connected Wallet:</h4> {account} 
                    <hr/>
                    <div>
                        <label>Recepient's Wallet Address</label>
                        <input className="input_text" type="number" />
                    </div>
                    <div>
                        <label>Amount to Transfer</label>
                        <input className="input_text" type="number" placeholder="Amount" />
                    </div>
                    <select className="input_text" aria-label="Default select example">
                        <option selected>Select Gas</option>
                        <option value="1">High Gas</option>
                        <option value="2">Medium Gas</option>
                        <option value="3">Low Gas</option>
                    </select>
                    <div class="form-check">
                        <input className="input_checkbox" type="checkbox" value="" id="flexCheckDefault"/>
                        <label>
                            <p className="concent">I agree to the terms and conditions.</p>
                        </label>
                    </div>
                    <button className="dashbutton">Transfer Now</button>
                </div>
                }
            </div>
        </div>
        <p> Value in account is : {account} </p>
        <hr />
        <h1> Transfer Page</h1>
        <hr/>
    </div>
    )
}

export default Transfer;
