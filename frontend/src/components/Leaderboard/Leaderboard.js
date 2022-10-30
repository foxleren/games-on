import './Leaderboard.scss';
import LeaderboardCard from "./LeaderboardCard";
import {contentPrefix} from "../../js/globals";

const leaders = [{
    name: 'Jacob Elordi', total: '900,000', image: `${contentPrefix}/images/leaders/image.jpg`,
}, {
    name: 'Jacob Elordi', total: '900,000', image: `${contentPrefix}/images/leaders/image.jpg`,
}, {
    name: 'Jacob Elordi', total: '900,000', image: `${contentPrefix}/images/leaders/image.jpg`,
}, {
    name: 'Jacob Elordi', total: '900,000', image: `${contentPrefix}/images/leaders/image.jpg`,
}, {
    name: 'Jacob Elordi', total: '900,000', image: `${contentPrefix}/images/leaders/image.jpg`,
}]
export default function Leaderboard() {
    return (<div className={'leaderboard-container'}>
        <div className={'leaderboard-title'}>Leaderboard</div>
        <div className={'leaderboard-items'}>
            {leaders.map((item, index) => {
                return <LeaderboardCard key={index} index={index} name={item.name} total={item.total} image={item.image}/>
            })}
        </div>
    </div>);
}