import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// initial state
const initialState = {
    transaction: []
    
};
// Create context
export  const GlobalContext = createContext(initialState);
// create global provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Action of delete button
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
        
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
        
    }
    return (
        <GlobalContext.Provider value={
            {
                transaction: state.transaction,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    ); 
}