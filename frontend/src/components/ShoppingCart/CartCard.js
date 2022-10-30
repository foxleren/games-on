import './Cart';
import {contentPrefix} from "../../js/globals";

export default function CartCard({product}) {
    return (<div className={'cart-card-container'}>
        <div className={'cart-card-info'}>
            <img src={`${contentPrefix}${product.image}`} alt={''}/>
            <div className={'cart-card-text'}>
                <div className={'cart-card-name'}>{product.name}</div>
                <div className={'cart-card-description'}>{product.description}</div>
            </div>
        </div>

        <div className={'cart-card-right'}>
            <div className={'remove-from-cart'}/>
            <div className={'cart-card-price'}>{`${product.price} ${product.currency}`}</div>
        </div>
    </div>);
}