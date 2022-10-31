import {makeAutoObservable} from "mobx";

export default class CartStore {
    constructor() {
        this._games = []
        makeAutoObservable(this)
    }

    get cart() {
        return this._games
    }

    setGames(cart) {
        this._games = cart
    }
}