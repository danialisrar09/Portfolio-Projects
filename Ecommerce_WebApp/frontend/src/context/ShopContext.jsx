import { createContext } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10.00;


    const value = {
        products,
        currency,
        delivery_fee,
    }

    return (
        <ShopContext.Provider value={value}>
            {/* Children components will be rendered here */}
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;