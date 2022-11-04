import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import './AccountPage.scss'
import {Context} from "../../index";
import {getUserData} from "../../http/userAPI";
import Button from "../../components/Button/Button";
import {GAME_ROUTE} from "../../utils/consts";
import usePreloader from "../../hooks/usePreloader";
import {getLibrary} from "../../http/libraryAPI";

const AccountPage = observer(() => {
    const {user} = useContext(Context)
    const [userEmail, setUserEmail] = useState('')
    const {showPreloader, navigateToWithPreloader} = usePreloader()

    useEffect(() => {
        showPreloader()
        getUserData().then(data => {
            setUserEmail(data.email)
        }).catch(err => {
            console.log(err)
        })
        getLibrary().then(data => {
            if (data === null) {
                data = []
            }
            user.setLibrary(data)
        }).catch(err => {
            console.log("Error while getting data", err)
        })
    }, [])
    return (<div className={'account-page'}>
        <div className={'account-info-container'}>
            <div className={'account-info-title'}>
                Personal account
            </div>
            <div className={'account-info-input'}>
                {userEmail}
            </div>
            {/*<div className={'account-info-input'}>*/}
            {/*    Password*/}
            {/*</div>*/}
        </div>
        <div className={'account-games-container'}>
            <div className={'account-games-title'}>
                My games
            </div>
            <div className={'account-games-items'}>
                {user.library !== null && user.library.map((item, index) => {
                    return (<div className={'account-game-item'} key={index}>
                        <div className={'account-game-item-left'}>
                            <img className={'showcase-card-image'} src={item.images[0]} alt={''}/>
                        </div>
                        <div className={'account-game-item-right'}>
                            <div className={'account-game-title'}>
                                {item.title}
                            </div>
                            <div className={'account-game-description'}>
                                {item.description.slice(0, 150) + '...'}
                            </div>
                            <Button content={"open"} backgroundColor={'blue'}
                                    action={() => navigateToWithPreloader(GAME_ROUTE + '/' + item.id)}/>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>);
})

export default AccountPage;
