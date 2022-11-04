import './ProductPage.scss';
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {getGameById} from "../../http/gameAPI";
import Slider from "../../components/Slider/Slider";
import Button from "../../components/Button/Button";
import {CART_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import usePreloader from "../../hooks/usePreloader";
import useAuthForm from "../../hooks/useAuthForm";
import {removeFromCart} from "../../js/ApiStorageHandlers";
import Footer from "../../components/Footer/Footer";
import {addToCart, getAllCartItems} from "../../http/cartAPI";
import React from "react";
import {getLibrary} from "../../http/libraryAPI";

const ProductPage = observer(() => {
    const {id} = useParams()


    // const getData = async () => {
    //     let d = []
    //     await getGameById(id).then(data => d = data)
    //     return d
    // }
    const [isLoading, setIsLoading] = useState(true)
    const [game, setGame] = useState({
        id: 0, title: '', description: '', price: 0, images: [], download_link: ''
    })
    const {user} = useContext(Context)
    const {showPreloader, navigateToWithPreloader} = usePreloader()
    const {setIsAuthFormVisible} = useAuthForm()

    useEffect(() => {
        showPreloader()
        let _ = []
        getGameById(id).then(data => {
            setGame(data)
            _ = data
        }).then(() => console.log(game))
        .then(() => {
            if (user.isAuth) {
                getAllCartItems().then(data => {
                    if (data === null) {
                        data = []
                    }
                    user.setCartItems(data)
                    //cart.setCartItems(data)
                })
                getLibrary().then(data => {
                    if (data === null) {
                        data = []
                    }
                    //console.log(data)
                    user.setLibrary(data)
                })
            }
        })
        //setGame(_)
        console.log("HOHOHO")
    }, [])

    const containsInCart = () => {
        console.log(game.id)
        const ind = user.cartItems.findIndex((game) => {
            return parseInt(game.id) === parseInt(id)
        }) !== -1
        return ind
    }

    const containsInLibrary = () => {
        return user.library.findIndex((game) => {
            return parseInt(game.id) === parseInt(id)
        }) !== -1
    }


    const ClickAddToCart = async () => {
        if (user.isAuth) {
            await addToCart(id)
            user.addCartItem(game)
        } else {
            setIsAuthFormVisible(true)
        }
    }

    const ClickRemoveFromCart = async () => {
        await removeFromCart(user, id)
    }


    //console.log("BEFORE RETURN: ", game)

    return (<div className={'product-page'}>
        <div className={'product-title'}>
            {game.title}
        </div>
        <Slider images={game.images != null ? game.images.slice(1) : []}/>
        <div className={'product-description'}>
            {game.description}
        </div>
        {!containsInLibrary() && <div className={'product-price'}>
            {game.price.toFixed(1)} €
        </div>}
        <div className={'product-buttons'}>
            {containsInLibrary() && <a href={game.download_link != null ? game.download_link : 'link'} target={'_'}>
                <Button content={'Download game'} size={'medium'} backgroundColor={'blue'}/>
            </a>}
            {containsInCart() && <>
                <Button content={'Remove from cart'} backgroundColor={'blue'} action={() => ClickRemoveFromCart()}/>
                <Button content={'Open cart'} backgroundColor={'purple'}
                        action={() => navigateToWithPreloader(CART_ROUTE)}/></>}
            {!containsInCart() && !containsInLibrary() && <>
                <Button content={'Add to cart'} backgroundColor={'blue'} action={() => ClickAddToCart()}/>
                <Button content={'Buy now'} backgroundColor={'purple'} action={() => {
                    const _ = ClickAddToCart()
                    navigateToWithPreloader(CART_ROUTE)
                }}/></>}
        </div>
        <Footer page={'cart'}/>
    </div>);
})

export default ProductPage;
