import './Cart.scss';
import CartCard from "./CartCard";
import Button from "../Button/Button";

const data = [{
    name: 'Counter-Strike',
    description: 'Counter-Strike is originally a fan-made modification for Half-Life about the confrontation between terrorists and special forces.',
    image: '/images/games/game_preview_1.jpg',
    price: '315',
    currency: '€',
}, {
    name: 'Counter-Strike',
    description: 'Counter-Strike is originally a fan-made modification for Half-Life about the confrontation between terrorists and special forces.',
    image: '/images/games/game_preview_1.jpg',
    price: '315',
    currency: '€',
},];

export default function Cart() {
    const currency = '€';

    const countTotalCost = (products) => {
        let totalCost = 0;
        products.forEach((item) => {
            totalCost += parseInt(item.price);
        });
        return totalCost;
    }
    return (<div className={'cart-container'}>
        <div className={'cart-title'}>Shopping cart</div>
        <div className={'cart-items-container'}>
            {data.map((item, index) => {
                return <CartCard key={index} product={item}/>
            })}
        </div>
        <div className={'cart-schild'}>
            <div className={'cart-schild-items'}>
                Items: <span>{data.length}</span>
            </div>
            <div className={'cart-schild-total-cost'}>
                Total cost: <span>{`${countTotalCost(data)} ${currency}`}</span>
            </div>
        </div>
        <div className={'cart-buttons'}>
            <Button backgroundColor={'blue'} content={'Buy now'}/>
            <Button backgroundColor={'purple'} content={'Empty the shopping cart '}/>
        </div>

    </div>);
}