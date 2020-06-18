import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export const Balance = () => {
    const { transaction } = useContext(GlobalContext);
    const amounts = transaction.map(transaction => transaction.amount);
    const totals = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 >${totals}</h1>

        </div>
    )
}
