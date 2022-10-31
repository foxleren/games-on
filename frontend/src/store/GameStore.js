import {makeAutoObservable} from "mobx";

export default class GameStore {
    constructor() {
        this._games = []
        makeAutoObservable(this)
    }

    get games() {
        return this._games
    }

    setGames(games) {
        this._games = games
    }
}