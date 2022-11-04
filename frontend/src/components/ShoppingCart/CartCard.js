import './Cart';
import {useContext} from "react";
import {Context} from "../../index";
import {removeFromCart} from "../../js/ApiStorageHandlers";

export default function CartCard({product, currency}) {
    const {user} = useContext(Context)

    return (<div className={'cart-card-container'}>
        <div className={'cart-card-info'}>
            <img src={product.images[0]} alt={''}/>
            <div className={'cart-card-text'}>
                <div className={'cart-card-name'}>{product.title}</div>
                <div className={'cart-card-description'}>{product.description.substring(0, 200) + '...'}</div>
            </div>
        </div>

        <div className={'cart-card-right'}>
            <div className={'remove-from-cart'} onClick={() => removeFromCart(user, product.id)}/>
            <div className={'cart-card-price'}>{`${product.price.toFixed(1)} ${currency}`}</div>
        </div>
    </div>);
}