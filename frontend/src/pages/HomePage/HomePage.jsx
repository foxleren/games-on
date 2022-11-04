import './HomePage.scss';
import Showcase from "../../components/Showcase/Showcase";
import BestsellerAdvert from "../../components/BestsellerAdvert/BestsellerAdvert";
import CreateAccountSchild from "../../components/CreateAccountSchild/CreateAccountSchild";
import Footer from "../../components/Footer/Footer";
import {useContext, useEffect} from "react";
import {getAllGames} from "../../http/gameAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import usePreloader from "../../hooks/usePreloader";
import {getAllCartItems} from "../../http/cartAPI";
import {getLibrary} from "../../http/libraryAPI";
import {getUserData} from "../../http/userAPI";


const HomePage = observer(() => {
    const {user, game} = useContext(Context)
    const {showPreloader} = usePreloader()
    useEffect(() => {
        showPreloader()
        //console.log(user.isAuth)
        // try {
        //     getAllGames().then(data => {
        //         game.setGames(data)
        //     }).then()
        //     if (user.isAuth) {
        //         getAllCartItems().then(data => {
        //             if (data === null) {
        //                 data = []
        //             }
        //             user.setCartItems(data)
        //             //cart.setCartItems(data)
        //         })
        //         getLibrary().then(data => {
        //             if (data === null) {
        //                 data = []
        //             }
        //             //console.log(data)
        //             user.setLibrary(data)
        //         })
        //         getUserData().then(data => {
        //             user.setUserEmail(data.email)
        //         })
        //     }
        // } catch (err) {
        //     console.log("Error while downloading data")
        // }

    }, [])

    return (
        <div className={'home-page'}>
            {/*<StatsSchilds/>*/}
            {!user.isAuth && <CreateAccountSchild/>}
            <BestsellerAdvert/>
            <Showcase/>
            {/*<Leaderboard/>*/}
            <Footer page={'home'}/>
        </div>
    );
})

export default HomePage;