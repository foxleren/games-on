import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    setIsAuth(authStatus) {
        this._isAuth = authStatus
    }

    setUser(user) {
        this._user = user
    }
}