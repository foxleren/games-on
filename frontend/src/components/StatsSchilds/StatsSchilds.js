import './StatsSchilds.scss';

export default function StatsSchilds() {
    return (<div className={'stats-schilds-container'}>
        <div className={'stats-logo'}/>
        <div className={'stats-big-schild'}>
            Total games
            <span>
                238 813
            </span>
            <div className={'stats-big-schild-image'}/>
        </div>
        <div className={'stats-schilds-bottom'}>
            <div className={'stats-schilds-item'}>
                Copies sold
                <span>
                        4768
                    </span>
            </div>
            <div className={'stats-schilds-item'}>
                Active participants
                <span>
                    8709
                    </span>
            </div>
            <div className={'stats-schilds-item'}>
                Top client
                <span>
                       Jacob Elordi
                    </span>
            </div>
        </div>
    </div>);
}