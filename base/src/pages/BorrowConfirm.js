import React from "react";
import { useLocation } from 'react-router-dom';

const BorrowConfirm = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get('amount');
  const time = searchParams.get('time');

  return (
    <div>
    <h1>BorrowConfirm page</h1>
    <p> Amount = {amount}</p>
    <p> Time = {time}</p>
    </div>
  );
}

export default BorrowConfirm;
