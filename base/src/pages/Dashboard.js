import React, { useContext } from "react";
import { EthContext } from "../context/Ethstate";
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const { account } = useContext(EthContext)
    return(
        <div className="Dashboard">
            {!account?
            <div>
                <h3> Seems like you have not connected your wallet.</h3>
                <h2> Connect your meta mask wallet to view your dashboard.</h2>
            </div>
            :
            <div>
                <div>
                    <h4>Connected Wallet:</h4> {account} 
                    <hr/>
                </div>
                <div className="dashboard_main">
                    <div className="staked_part">
                        <h2> Your Assets </h2>
                        <hr/>
                        <table class="table">
                            <tbody>
                                <tr>
                                <td>Current interest Rate</td>
                                <td>8.5%</td>
                                </tr>
                                <tr>                            
                                <td>Total Deposited Eth</td>
                                <td>341 ETH</td>
                                <td>
                                    <Link to="/stake">
                                        <button className="dashbutton">Stake More Assets</button>
                                    </Link>
                                </td>
                                </tr>
                                <tr>                                
                                <td>Total Interest Accured</td>
                                <td>$45.875</td>
                                <td>
                                    <button className="dashbutton">Withdraw Interest</button>
                                </td>
                                </tr>
                                <tr>                                
                                <td>Total Interest Accured</td>
                                <td>$45.875</td>
                                <td>
                                    <button className="dashbutton">Withdraw Interest</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        <hr/>
                    </div>
                    <hr className="hr_verticle"/>
                    <div className="loaned_part">
                        <h2> Your Loans</h2>
                        <hr/>                        
                        <table class="table">
                            <tbody>
                                <tr>
                                <td>Current interest Rate</td>
                                <td>7.5%</td>
                                </tr>
                                <tr>                            
                                <td>Total Deposited Collateral</td>
                                <td>341 ETH</td>
                                <td>
                                    <Link to="/stake">
                                        <button className="dashbutton">Increase Collateral</button>
                                    </Link>
                                </td>
                                </tr>
                                <tr>                                
                                <td>Total Loan Taken out</td>
                                <td>$45.875</td>
                                <td>
                                    <Link to="/borrow">
                                    <button className="dashbutton">Take more loans</button>
                                    </Link>
                                </td>
                                </tr>
                                <tr>                                
                                <td>Due Payment</td>
                                <td>$45.875</td>
                                <td>
                                    <button className="dashbutton">Pay Now</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>

                        <hr/>
                    </div>
                </div>
            </div>
            }
            
            <h1> Dashboard Page</h1>
            <hr/>
        </div>
    )
}

export default Dashboard;
