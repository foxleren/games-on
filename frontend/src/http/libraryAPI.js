import {$authHost} from "./index";

export const getLibrary = async () => {
    const {data} = await $authHost.get('/api/user/library/')
    console.log(data)
    return data
}

export const addToLibrary = async () => {
    await $authHost.post('/api/user/library/')
}