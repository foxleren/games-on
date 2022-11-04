import {deleteCartItem} from "../http/cartAPI";
import {useContext} from "react";
import {Context} from "../index";

export const removeFromCart = async (user, id) => {
    await deleteCartItem(id)
    user.setCartItems(user.cartItems.filter((item) => {
        return parseInt( item.id) !== parseInt(id)
    }))
}