import './Showcase';
import {useNavigate} from 'react-router-dom';
import {GAME_ROUTE} from "../../utils/consts";

export default function ShowcaseCard({id, name, description, image}) {
    const navigate = useNavigate()
    return (<div className={'showcase-card-container'}>
        <img className={'showcase-card-image'} src={image} alt={''}/>
        <div className={'showcase-card-bottom'}>
            <div className={'showcase-card-title'}>{name}</div>
            <div className={'showcase-card-description'}>{description.substring(0, 90) + '...'}</div>
            <div className={'showcase-card-more'} onClick={() => navigate(`${GAME_ROUTE}/${id}`)}>More</div>
        </div>
    </div>);
}