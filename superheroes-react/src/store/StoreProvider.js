import {createContext, useReducer, useContext} from 'react';
import storeReducer, {initialStore} from './storeReducer';

const StoreContext = createContext();

const StoreProvider = ({children}) =>
    <StoreContext.Provider value={useReducer(storeReducer, initialStore)}>
        {children}
    </StoreContext.Provider>

const useStore = () => useContext(StoreContext)[0]

export {StoreContext, useStore}
export default StoreProvider;