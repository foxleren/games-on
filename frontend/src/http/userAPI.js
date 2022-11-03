import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const signUp = async (email, password) => {
    const {data} = await $host.post('auth/sign-up', {
        "email": email, "password": password
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const createCart = async () => {
    await $authHost.post('/api/user/cart/')
}

export const signIn = async (email, password) => {
    const {data} = await $host.post('auth/sign-in', {
        "email": email, "password": password
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

// export const checkUserIdentity = async () => {
//     const response = await $host.post('auth/sign-up', {email, password})
//     return response
// }