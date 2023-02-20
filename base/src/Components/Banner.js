import React from 'react'

const Banner = () => {
    return (
    <div>
        {/* <Navbar /> */}
        <div className='Banner'>
            <div className='Banner-left'>
                <p className='line2'> DECENTRALIZED LIQUIDITY POOL</p>
                <p className='line3'> Earn Interest, Borrow Assets and build applications.</p>
            </div>
            <div className='Banner-right'>
                <p className='topic1'>Total Deposited ETH</p>
                <p className='detail1'>32,414 ETH</p>
                <hr/>
                <p className='topic1'>Total Interest Accured</p>
                <p className='detail1'>$45,982.976</p>
                <hr/>
                <p className='topic'>Total USDT Locked In Pool:</p>
                <p className='detail'>$45,437,892</p>
            </div>
        </div>
    </div>
    )
}

export default Banner;
