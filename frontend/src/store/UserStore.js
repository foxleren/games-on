import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        this._library = []
        this._cartItems = []
        this._CartTotalPrice = 0
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    //---------------
    get totalPrice() {
        return this._CartTotalPrice
    }

    get isCartEmpty() {
        return this._cartItems.length === 0;
    }

    get library() {
        return this._library
    }

    setLibrary(library) {
        this._library = library
    }

    setIsAuth(authStatus) {
        this._isAuth = authStatus
    }

    setUser(user) {
        this._user = user
    }

    addCartItem(cartItem) {
        this._cartItems.push(cartItem);
    }

    setCartItems(cartItems) {
        this._cartItems = cartItems
    }

    setCartTotalPrice(totalPrice) {
        this._CartTotalPrice = totalPrice
    }
}