import './Showcase.scss';
import ShowcaseCard from "./ShowcaseCard";
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Showcase = observer(() => {
    const {game} = useContext(Context)

    const getPreview = (images) => {
        if (images === null) {
            return ''
        }
        return images[0];
    }
    return (<div className={'showcase-container'}>
        <div className={'showcase-title'}>All games:</div>
        <div className={'showcase-items'}>
            {game.games != null && game.games.map((item, index) => {
                return <ShowcaseCard key={index} id={item.id} name={item.title} description={item.description}
                                     image={getPreview(item.images)}/>
            })}
        </div>
    </div>);
})

export default Showcase;