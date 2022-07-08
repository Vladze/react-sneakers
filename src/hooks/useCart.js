import { useContext } from "react"
import AppContext from "../context"

export const useCart = () => {
    const { cartItems, setCartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((prev, item) => prev + Number(item.price), 0);

    return { cartItems, setCartItems, totalPrice }
}