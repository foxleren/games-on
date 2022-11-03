import './ProductPage.scss';
import {useContext, useEffect, useState} from "react";
import {movePageTop} from "../../utils/funcs";
import {useParams} from "react-router";
import {getGameById} from "../../http/gameAPI";
import Slider from "../../components/Slider/Slider";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import {addToCart} from "../../http/cartAPI";
import {CART_ROUTE} from "../../utils/consts";
import {Link} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const ProductPage = observer(() => {
    const [game, setGame] = useState({
        id: 0, title: '', description: '', price: 0, images: [], download_link: ''
    });
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const {cart} = useContext(Context)
    const {id} = useParams()
    useEffect(() => {
        movePageTop()
        getGameById(id).then(data => {
            setGame(data)
        })
    }, [])

    const addGameToCart = async () => {
        await addToCart(id)
        cart.addCartItem(game)
    }
    console.log('Contains: ', cart.cartItems.findIndex((item) => item.id === id))
    console.log(cart.cartItems)
    return (<div className={'product-page'}>
        <div className={'product-title'}>
            {game.title}
        </div>
        <Slider images={game.images != null ? game.images.slice(1) : []}/>
        <div className={'product-description'}>
            {game.description}
        </div>
        {/*<div className={'product-description'}>*/}
        {/*    Players in the role of members of two teams will have to fight each other on various maps in several different modes (demining, hostage rescue and others).*/}
        {/*</div>*/}
        <div className={'product-buttons'}>
            {isAddedToCart && <div>CONTAINS</div>}
            <Button content={'Add to cart'} backgroundColor={'blue'} action={() => addGameToCart()}/>
            <Link to={CART_ROUTE}>
                <Button content={'Buy now'} backgroundColor={'purple'} action={() => addGameToCart()}/>
            </Link>
        </div>
        <Footer page={'cart'}/>
        {/*<div className={'slider-container'}>*/}
        {/*    <div className={'slide-container'}>*/}
        {/*        <img src={`${contentPrefix}/images/games/game_preview_1.jpg`} alt={''}/>*/}
        {/*    </div>*/}
        {/*    <div className={'slide-container'}>*/}
        {/*        <img src={`${contentPrefix}/images/games/game_preview_1.jpg`} alt={''}/>*/}
        {/*    </div>*/}
        {/*    <div className={'slide-container'}>*/}
        {/*        <img src={`${contentPrefix}/images/games/game_preview_1.jpg`} alt={''}/>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>);
})

export default ProductPage;