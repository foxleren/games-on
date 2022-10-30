import './Showcase';
import {contentPrefix} from "../../js/globals";
import {Link} from 'react-router-dom';

export default function ShowcaseCard({name, description, image}) {
    return (<div className={'showcase-card-container'}>
            <img className={'showcase-card-image'} src={`${contentPrefix}${image}`} alt={''}/>
            <div className={'showcase-card-bottom'}>
                <div className={'showcase-card-title'}>{name}</div>
                <div className={'showcase-card-description'}>{description}</div>
                <Link to={'/product'}>
                    <div className={'showcase-card-more'}>More</div>
                </Link>
            </div>
        </div>);
}