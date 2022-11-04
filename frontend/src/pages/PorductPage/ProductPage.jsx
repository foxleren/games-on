import './ProductPage.scss';
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {getGameById} from "../../http/gameAPI";
import Slider from "../../components/Slider/Slider";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import {addToCart} from "../../http/cartAPI";
import {CART_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import usePreloader from "../../hooks/usePreloader";
import useAuthForm from "../../hooks/useAuthForm";

const ProductPage = observer(() => {
    const [game, setGame] = useState({
        id: 0, title: '', description: '', price: 0, images: [], download_link: ''
    });
    //const [isAddedToCart, setIsAddedToCart] = useState(false);
    const navigate = useNavigate()
    const {cart, user} = useContext(Context)
    const {id} = useParams()
    const {showPreloader, navigateToWithPreloader} = usePreloader()
    const {setIsAuthFormVisible} = useAuthForm()
    useEffect(() => {
        showPreloader()
        getGameById(id).then(data => {
            setGame(data)
        })
    }, [])

    const addGameToCart = async () => {
        await addToCart(id)
        cart.addCartItem(game)
    }

    const clickAddToCart = async () => {
        if (user.isAuth) {
            await addGameToCart()
        } else {
            setIsAuthFormVisible(true)
        }
    }


    const clickBuyNow = async () => {
        if (user.isAuth) {
            await addGameToCart()
            navigateToWithPreloader(CART_ROUTE)
        } else {
            setIsAuthFormVisible(true)
        }
    }

    //const isInLibrary = async () =>

    return (<div className={'product-page'}>
        <div className={'product-title'}>
            {game.title}
        </div>
        <Slider images={game.images != null ? game.images.slice(1) : []}/>
        <div className={'product-description'}>
            {game.description}
        </div>
        <div className={'product-price'}>
            {game.price.toFixed(1)} €
        </div>
        <div className={'product-buttons'}>
            {/*{isAddedToCart && <div>CONTAINS</div>}*/}
            <Button content={'Add to cart'} backgroundColor={'blue'} action={() => clickAddToCart()}/>
            <Button content={'Buy now'} backgroundColor={'purple'} action={() => clickBuyNow()}/>
        </div>
        <Footer page={'cart'}/>
    </div>);
})

export default ProductPage;