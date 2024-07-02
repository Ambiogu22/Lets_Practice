import { createContext } from "react"
import { useState } from "react"
import { getItemData } from "../data/Items"

export const AppContext = createContext({
    items: [],
    getItemQty: () => {},
    addQty: () => {},
    subtractQty: () => {},
    removeItem: () => {},
    getTotalCartItems: () => {},
    getTotalCartCost: () => {}
});

export const AppProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const getItemQty = (id) => {
        const qty = cartItems.find(item => item.id === id)?.qty;

        if (qty === undefined){
            return 0;
        }

        return qty;
    }

    const addQty = (id) => {
        const qty = getItemQty(id)

        if(qty === 0){
            setCartItems([...cartItems, {id: id, qty: 1}])
        }else{
            setCartItems(cartItems.map(item=>item.id === id ? {...item, qty: item.qty + 1} : item))
        }
    }

    const subtractQty = (id) => {
        const qty = getItemQty(id)

        if(qty === 1){
            removeItem(id)
        }else{
            setCartItems(cartItems.map(item=>item.id === id ? {...item, qty: item.qty - 1} : item))
        }
    }

    const removeItem = (id) => {
        setCartItems(cartItems => cartItems.filter(item=>{
            return item.id != id;
        }))
    }

    const getTotalCartItems = () => {
        let totalItems = 0;

        cartItems.map((cartItem) => {
            totalItems += cartItem.qty
        });

        return totalItems;
    }

    const getTotalCartCost = () => {
        let totalCost = 0;

        cartItems.map((cartItem) => {
            const itemData = getItemData(cartItem.id);
            totalCost += (itemData.price * cartItem.qty);
        });

        return totalCost;
    }

    //Functions above

    const contextValues = {
        items: cartItems,
        getItemQty,
        addQty,
        subtractQty,
        removeItem,
        getTotalCartItems,
        getTotalCartCost
    }

    return(
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;