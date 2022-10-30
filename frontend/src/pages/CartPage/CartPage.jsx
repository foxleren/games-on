import './CartPage.scss';
import Cart from "../../components/ShoppingCart/Cart";
import Footer from "../../components/Footer/Footer";

export default function CartPage() {
    return (
        <div className={'cart-page'}>
            <Cart/>
            <Footer page={'cart'}/>
        </div>
    );
}