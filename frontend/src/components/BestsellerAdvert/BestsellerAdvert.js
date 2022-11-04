import './BestsellerAdvert.scss';
import Button from "../Button/Button";
import {GAME_ROUTE} from "../../utils/consts";
import React, {useContext, useEffect} from "react";
import {Context} from "../../index";
import useAuthForm from "../../hooks/useAuthForm";
import usePreloader from "../../hooks/usePreloader";

export default function BestsellerAdvert() {
    const {game, user} = useContext(Context)
    const {setIsAuthFormVisible} = useAuthForm()
    const {navigateToWithPreloader} = usePreloader()

    useEffect(() => {
        // getAllGames().then(data => {
        //     game.setGames(data)
        // }).catch(err => {
        //     console.log("Error while getting data", err)
        // })
    }, [])

    const getIdOfBestseller = () => {
        const index = game.games.findIndex((game) => game.title === 'Rue la résistance')
        if (index !== -1) {
            return GAME_ROUTE + '/' + game.games[index].id
        }
        return 'not-found'
    }
    // console.log(getIndexOfBestseller())
    // let index = -1
    // let gameBestseller = ''
    // if (getIndexOfBestseller() !== -1) {
    //     index = getIndexOfBestseller()
    //     gameBestseller = game.games[index]
    // }
    // //const
    // console.log(gameBestseller)
    // const id = 3
    return (<div className={'bestseller-advert-container'}>
        <div className={'bestseller-advert-content'}>
            <div className={'bestseller-advert-title'}>
                Rue la résistance
            </div>
            <div className={'bestseller-advert-text'}>
                Rue la résistance is a third project of "Russian Visual Technologies" studio, which tells about the life
                of a group of partisans, who represent the French Resistance.
            </div>
            <div className={'bestseller-advert-text'}>
                Rue la résistance is a third project of "Russian Visual Technologies" studio, which tells about the life
                of a group of partisans, who represent the French Resistance.The whole world is a stage. The game is
                built according to the idea of a theatrical performance: the play "Sonata of Ghosts" by August
                Strindberg. It is based on the theatrical techniques of presence, spatial plot and act and has its own
                "black intervals". The actors in the game follow the main purpose of the actor - not to turn his back to
                the viewer (the viewer can be with a knife).
            </div>

            <div className={'bestseller-advert-buttons'}>
                {/*{containsInLibrary(user, id) &&*/}
                {/*    <a href={'https://drive.google.com/drive/folders/1Vr9vVRe1dR4l-BDKhW_Wauu16r-P3GHU'}*/}
                {/*       target={'_blank'}>*/}
                {/*        <Button content={'Download game'} size={'medium'} backgroundColor={'blue'}/>*/}
                {/*    </a>}*/}
                {/*{containsInCart(user, id) && <>*/}
                {/*    <Button content={'Remove from cart'} backgroundColor={'blue'}*/}
                {/*            action={() => ClickRemoveFromCart(user, id)}/>*/}
                {/*    <Button content={'Open cart'} backgroundColor={'purple'}*/}
                {/*            action={() => navigateToWithPreloader(CART_ROUTE)}/></>}*/}
                {/*{!containsInCart(user, id) && !containsInLibrary(user, id) && <>*/}
                {/*    <Button content={'Add to cart'} backgroundColor={'blue'}*/}
                {/*            action={() => ClickAddToCart(user, gameBestseller, setIsAuthFormVisible, () => {*/}
                {/*            })}/>*/}
                {/*    <Button content={'Buy now'} backgroundColor={'purple'}*/}
                {/*            action={() => ClickAddToCart(user, gameBestseller, setIsAuthFormVisible, () => navigateToWithPreloader(CART_ROUTE))}/></>}*/}
                <Button content={'Learn more'} backgroundColor={'blue'} size={'medium'}
                        action={() => navigateToWithPreloader(getIdOfBestseller())}/>
                {/*<Button content={'Buy now'} backgroundColor={'purple'} action={() => clickBuyNow()}/>*/}
            </div>
        </div>
        <div className={'bestseller-advert-background'}/>
    </div>);
}