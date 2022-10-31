import {makeAutoObservable} from "mobx";

export default class CartStore {
    constructor() {
        this._cartItems = []
        this._totalPrice = 0
        makeAutoObservable(this)
    }

    get cartItems() {
        return this._cartItems
    }

    get totalPrice() {
        return this._totalPrice
    }

    get isCartEmpty() {
        return this._cartItems.length === 0;
    }

    // isCartContainsItem(id) {
    //     console.log("id: ", id)
    //     return this._cartItems.findIndex((item) => item.id === 1);
    // }

    addCartItem(cartItem) {
        this._cartItems.push(cartItem);
    }

    setCartItems(cartItems) {
        this._cartItems = cartItems
    }

    setTotalPrice(totalPrice) {
        this._totalPrice = totalPrice
    }
}