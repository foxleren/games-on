import {addToCart, deleteCartItem} from "../http/cartAPI";
import {CART_ROUTE} from "../utils/consts";

export const removeFromCart = async (user, id) => {
    await deleteCartItem(id)
    user.setCartItems(user.cartItems.filter((item) => {
        return parseInt(item.id) !== parseInt(id)
    }))
}

export const containsInCart = (user, id) => {
    if (user.isAuth) {
        return user.cartItems.findIndex((game) => {
            return parseInt(game.id) === parseInt(id)
        }) !== -1
    }
}

export const containsInLibrary = (user, id) => {
    if (user.isAuth) {
        return user.library.findIndex((game) => {
            return parseInt(game.id) === parseInt(id)
        }) !== -1
    }
}


export const ClickAddToCart = async (user, game, setIsAuthFormVisible, navigateToWithPreloader) => {
    if (user.isAuth) {
        await addToCart(game.id)
        user.addCartItem(game)
        navigateToWithPreloader()
    } else {
        setIsAuthFormVisible(true)
    }
}

export const ClickRemoveFromCart = async (user, id) => {
    await removeFromCart(user, id)
}