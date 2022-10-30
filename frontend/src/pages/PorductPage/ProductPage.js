import './ProductPage.scss';
import {contentPrefix} from "../../js/globals";
import Slider from "../../components/Slider/Slider";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

export default function ProductPage() {
    return (
        <div className={'product-page'}>
            <div className={'product-title'}>
                Counter-Strike
            </div>
            <Slider/>
            <div className={'product-description'}>
                Counter-Strike is originally a fan-made modification for Half-Life about the confrontation between terrorists and special forces, created specifically for the multiplayer mode. The modification has gained immense popularity and has grown into a whole series of games (CS: Source and CS: Global Offensive).
            </div>
            <div className={'product-description'}>
                Players in the role of members of two teams will have to fight each other on various maps in several different modes (demining, hostage rescue and others).
            </div>
            <div className={'product-buttons'}>
                <Button content={'Add to cart'} backgroundColor={'blue'}/>
                <Button content={'Buy now'} backgroundColor={'purple'}/>
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
        </div>
    );
}