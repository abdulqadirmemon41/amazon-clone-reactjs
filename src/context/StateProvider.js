//Setting up the data layer
//We need this to track basket

import React, { createContext,useContext,useReducer } from 'react';

//THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD THE PROVIDER
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//THIS is how we use it inside the component
export const useStateValue = () => useContext(StateContext)