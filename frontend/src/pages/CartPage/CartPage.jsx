import './CartPage.scss';
import Footer from "../../components/Footer/Footer";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../../index";
import {deleteAllCartItems, getAllCartItems} from "../../http/cartAPI";
import {addToLibrary, getLibrary} from "../../http/libraryAPI";
import CartCard from "../../components/ShoppingCart/CartCard";
import Button from "../../components/Button/Button";
import usePreloader from "../../hooks/usePreloader";

const CartPage = observer(() => {
    const {user} = useContext(Context)
    const {showPreloader} = usePreloader()
    useEffect(() => {
        // if (user.isAuth) {
        //     getAllCartItems().then(data => {
        //         if (data === null) {
        //             data = []
        //         }
        //         user.setCartItems(data)
        //         //cart.setCartItems(data)
        //     })
        //     getLibrary().then(data => {
        //         if (data === null) {
        //             data = []
        //         }
        //         //console.log(data)
        //         user.setLibrary(data)
        //     })
        // }
    }, [])

    console.log(user.cartItems)

    const completeOrder = async () => {
        await addToLibrary()
        await clearCart()
    }

    const clearCart = async () => {
        await deleteAllCartItems()
        user.setCartItems([])
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
                    {user.cartItems.map((item, index) => {
                        return <CartCard key={index} product={item} currency={currency}/>
                    })}
                </div>
                <div className={'cart-schild'}>
                    <div className={'cart-schild-items'}>
                        Items: <span>{user.cartItems.length}</span>
                    </div>
                    <div className={'cart-schild-total-cost'}>
                        Total cost: <span>{`${countTotalCost(user.cartItems).toFixed(1)} ${currency}`}</span>
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
