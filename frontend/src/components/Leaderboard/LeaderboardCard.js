import './Leaderboard';

export default function LeaderboardCard({name, total, image, index}) {
    return (<div className={`leaderboard-card-container ${index === 0 ? 'best' : ''}`}>
        <img className={'leaderboard-card-image'} src={image} alt={''}/>
        <div className={'leaderboard-card-name'}>{name}</div>
        <div className={'leaderboard-card-total'}>{total}</div>
    </div>);
}