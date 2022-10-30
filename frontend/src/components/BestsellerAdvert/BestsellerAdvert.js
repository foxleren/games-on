import './BestsellerAdvert.scss';
import Button from "../Button/Button";

export default function BestsellerAdvert() {
    return (<div className={'bestseller-advert-container'}>
        <div className={'bestseller-advert-content'}>
            <div className={'bestseller-advert-title'}>
                Game - bestseller
            </div>
            <div className={'bestseller-advert-text'}>
                Counter-Strike is originally a fan-made modification for Half-Life about the confrontation between
                terrorists and special forces, created specifically for the multiplayer mode. The modification has
                gained immense popularity and has grown into a whole series of games (CS: Source and CS: Global
                Offensive).
            </div>
            <div className={'bestseller-advert-text'}>
                Players in the role of members of two teams will have to fight each other on a variety of maps in
                several different modes (demining, hostage rescue, and others).
            </div>
            <div className={'bestseller-advert-text'}>
                The goal of each team is either to fulfill a certain condition of the mode, or to destroy the entire
                enemy team. Each player has one "life" per round, and in case of death can not affect the battlefield in
                any way.
            </div>

            <div className={'bestseller-advert-buttons'}>
                <Button backgroundColor={'blue'} content={'Add to cart'}/>
                <Button backgroundColor={'purple'} content={'Buy now'}/>
            </div>
        </div>
        <div className={'bestseller-advert-background'}/>
    </div>);
}