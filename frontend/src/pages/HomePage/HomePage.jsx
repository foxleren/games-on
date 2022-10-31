import './HomePage.scss';
import Showcase from "../../components/Showcase/Showcase";
import BestsellerAdvert from "../../components/BestsellerAdvert/BestsellerAdvert";
import CreateAccountSchild from "../../components/CreateAccountSchild/CreateAccountSchild";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import StatsSchilds from "../../components/StatsSchilds/StatsSchilds";
import Footer from "../../components/Footer/Footer";
import {useContext, useEffect} from "react";
import {getAllGames} from "../../http/gameAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const HomePage = observer(() => {
    const {game} = useContext(Context)
    useEffect(() => {
        getAllGames().then(data => {
            game.setGames(data)
        })
    }, [])

    return (
        <div className={'home-page'}>
            <StatsSchilds/>
            <CreateAccountSchild/>
            <BestsellerAdvert/>
            <Showcase/>
            <Leaderboard/>
            <Footer page={'home'}/>
        </div>
    );
})

export default HomePage;