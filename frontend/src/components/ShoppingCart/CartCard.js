import './Cart';
import {deleteCartItem, deleteItemCart} from "../../http/cartAPI";
import {useContext} from "react";
import {Context} from "../../index";

export default function CartCard({product, currency}) {
    const {cart} = useContext(Context)

    const removeFromCart = async (id) => {
        await deleteCartItem(id)
        cart.setCartItems(cart.cartItems.filter((item) => {
            return item.id !== id
        }))
    }

    return (<div className={'cart-card-container'}>
        <div className={'cart-card-info'}>
            <img src={product.images[0]} alt={''}/>
            <div className={'cart-card-text'}>
                <div className={'cart-card-name'}>{product.name}</div>
                <div className={'cart-card-description'}>{product.description.substring(0, 100) + '...'}</div>
            </div>
        </div>

        <div className={'cart-card-right'}>
            <div className={'remove-from-cart'} onClick={() => removeFromCart(product.id)}/>
            <div className={'cart-card-price'}>{`${product.price} ${currency}`}</div>
        </div>
    </div>);
}