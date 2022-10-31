import {$authHost} from "./index";

export const getAllCartItems = async () => {
    const {data} = await $authHost.get('/api/user/cart/items/')
    return data
}

export const addToCart = async (id) => {
    await $authHost.post('/api/user/cart/items/' + id)
}

export const deleteCartItem = async (id) => {
    await $authHost.delete('/api/user/cart/items/' + id)
}

export const deleteAllCartItems = async () => {
    await $authHost.delete('/api/user/cart/items/')
}

