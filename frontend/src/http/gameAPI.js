import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const getAllGames = async () => {
    const {data} = await $host.get('/api/games/')
    return data
}

export const getGameById = async (id) => {
    const {data} = await $host.get('/api/games/' + id)
    return data
}
