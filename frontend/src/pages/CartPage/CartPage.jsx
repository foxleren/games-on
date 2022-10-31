import './CartPage.scss';
import Footer from "../../components/Footer/Footer";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../../index";
import {deleteAllCartItems, getAllCartItems} from "../../http/cartAPI";
import {addToLibrary} from "../../http/libraryAPI";
import CartCard from "../../components/ShoppingCart/CartCard";
import Button from "../../components/Button/Button";

const CartPage = observer(() => {
    const {cart} = useContext(Context)
    useEffect(() => {
        getAllCartItems().then(data => {
            if (data == null) {
                data = []
            }
            cart.setCartItems(data)
        })
    }, [])

    const completeOrder = async () => {
        await addToLibrary()
    }

    const clearCart = async() => {
        await deleteAllCartItems()
        cart.setCartItems([])
    }

    const currency = '€';

    const countTotalCost = (products) => {
        let totalCost = 0;
        products.forEach((item) => {
            totalCost += parseInt(item.price);
        });
        return totalCost;
    }

    return (
        <div className={'cart-page'}>
            {/*<Cart cartItems={cart.cartItems}/>*/}
            <div className={'cart-container'}>
                <div className={'cart-title'}>Shopping cart</div>
                <div className={'cart-items-container'}>
                    {cart.cartItems.map((item, index) => {
                        return <CartCard key={index} product={item} currency={currency}/>
                    })}
                </div>
                <div className={'cart-schild'}>
                    <div className={'cart-schild-items'}>
                        Items: <span>{cart.cartItems.length}</span>
                    </div>
                    <div className={'cart-schild-total-cost'}>
                        Total cost: <span>{`${countTotalCost(cart.cartItems)} ${currency}`}</span>
                    </div>
                </div>
                <div className={'cart-buttons'}>
                    <Button backgroundColor={'blue'} content={'Buy now'} action={() => completeOrder()}/>
                    <Button backgroundColor={'purple'} content={'Empty the shopping cart '} action={() => clearCart()}/>
                </div>

            </div>
            <Footer page={'cart'}/>
        </div>
    );
})

export default CartPage;
