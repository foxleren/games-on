import {makeAutoObservable} from "mobx";

export default class AuthFormStore {
    constructor() {
        this._isAuthFormVisible = false;
        makeAutoObservable(this)
    }

    get isAuthFormVisible() {
        return this._isAuthFormVisible;
    }

    setIsAuthFormVisible(status) {
        this._isAuthFormVisible = status
    }
}