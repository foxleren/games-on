import './BestsellerAdvert.scss';
import Button from "../Button/Button";
import {addToCart} from "../../http/cartAPI";
import {CART_ROUTE} from "../../utils/consts";
import {useContext} from "react";
import {Context} from "../../index";
import useAuthForm from "../../hooks/useAuthForm";
import usePreloader from "../../hooks/usePreloader";

export default function BestsellerAdvert() {
    const {game, cart, user} = useContext(Context)
    const {setIsAuthFormVisible} = useAuthForm()
    const {navigateToWithPreloader} = usePreloader()
    const addGameToCart = async () => {
        const indexOfBestseller = game.games.findIndex((game) => game.title === 'Rue la résistance')
        await addToCart(game.games[indexOfBestseller].id)
        cart.addCartItem(game.games[indexOfBestseller])
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
                <Button content={'Add to cart'} backgroundColor={'blue'} action={() => clickAddToCart()}/>
                <Button content={'Buy now'} backgroundColor={'purple'} action={() => clickBuyNow()}/>
            </div>
        </div>
        <div className={'bestseller-advert-background'}/>
    </div>);
}