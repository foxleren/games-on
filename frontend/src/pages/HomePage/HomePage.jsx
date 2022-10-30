import './HomePage.scss';
import Showcase from "../../components/Showcase/Showcase";
import BestsellerAdvert from "../../components/BestsellerAdvert/BestsellerAdvert";
import CreateAccountSchild from "../../components/CreateAccountSchild/CreateAccountSchild";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import StatsSchilds from "../../components/StatsSchilds/StatsSchilds";
import Footer from "../../components/Footer/Footer";

import axios from 'axios';

// axios({
//     method: 'get',
//     url: 'http://79.143.30.155:8000/api/games/',
//     responseType: 'stream'
// })
//     .then(function (response) {
//         console.log(response)
//     });
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

axios({
    method: 'get',
    url: 'http://localhost:8000/api/games/',
    withCredentials: false,
    data: '',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})
    .then(resp => {
        console.log(resp)
    })
    .catch(err => {

    })

export default function HomePage() {
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
}