import './ProductPage.scss';
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {getGameById} from "../../http/gameAPI";
import Slider from "../../components/Slider/Slider";
import Button from "../../components/Button/Button";
import {CART_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import usePreloader from "../../hooks/usePreloader";
import useAuthForm from "../../hooks/useAuthForm";
import {ClickAddToCart, ClickRemoveFromCart, containsInCart, containsInLibrary} from "../../js/ApiStorageHandlers";
import Footer from "../../components/Footer/Footer";
import {getAllCartItems} from "../../http/cartAPI";
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
        getGameById(id).then(data => {
            console.log(data)
            setGame(data)
        }).catch(err => {
            console.log("Error while getting data", err)
        })
        if (user.isAuth) {
            getAllCartItems().then(data => {
                if (data === null) {
                    data = []
                }
                user.setCartItems(data)
            }).catch(err => {
                console.log("Error while getting data", err)
            })
            getLibrary().then(data => {
                if (data === null) {
                    data = []
                }
                user.setLibrary(data)
            }).catch(err => {
                console.log("Error while getting data", err)
            })
        }
    }, [])
    console.log(game.download_link)
    return (<div className={'product-page'}>
        <div className={'product-title'}>
            {game.title}
        </div>
        <Slider images={game.images != null ? game.images.slice(1) : []}/>
        <div className={'product-description'}>
            {game.description}
        </div>
        {!containsInLibrary(user, id) && <div className={'product-price'}>
            {game.price.toFixed(1)} €
        </div>}
        <div className={'product-buttons'}>
            {containsInLibrary(user, id) &&
                <a href={'https://drive.google.com/drive/folders/1Vr9vVRe1dR4l-BDKhW_Wauu16r-P3GHU'} target={'_'}>
                    <Button content={'Download game'} size={'medium'} backgroundColor={'blue'}/>
                </a>}
            {containsInCart(user, id) && <>
                <Button content={'Remove from cart'} backgroundColor={'blue'}
                        action={() => ClickRemoveFromCart(user, id)}/>
                <Button content={'Open cart'} backgroundColor={'purple'}
                        action={() => navigateToWithPreloader(CART_ROUTE)}/></>}
            {!containsInCart(user, id) && !containsInLibrary(user, id) && <>
                <Button content={'Add to cart'} backgroundColor={'blue'}
                        action={() => ClickAddToCart(user, game, setIsAuthFormVisible)}/>
                <Button content={'Buy now'} backgroundColor={'purple'}
                        action={() => ClickAddToCart(user, game, setIsAuthFormVisible, () => navigateToWithPreloader(CART_ROUTE))}/></>}
        </div>
        <Footer page={'cart'}/>
    </div>);
})

export default ProductPage;
