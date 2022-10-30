import './Showcase.scss';
import ShowcaseCard from "./ShowcaseCard";

const items = [{
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
}, {
    name: 'Counter-Strike',
    description: 'fan modification for Half-Life about confrontation between terrorists and commandos....',
    image: '/images/games/game_preview_1.jpg',
},];

export default function Showcase() {
    return (<div className={'showcase-container'}>
        <div className={'showcase-title'}>All games:</div>
        <div className={'showcase-items'}>
            {items.map((item, index) => {
                return <ShowcaseCard key={index} name={item.name} description={item.description} image={item.image}/>
            })}
        </div>
    </div>);
}