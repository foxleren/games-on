import './CreateAccountSchild.scss';
import Button from "../Button/Button";
import useAuthForm from "../../hooks/useAuthForm";
import {useEffect} from "react";

export default function CreateAccountSchild() {
    const {setIsAuthFormVisible} = useAuthForm()

    return (<div className={'schild-container'}>
        <div className={'schild-title'}>To buy games
            create an account
        </div>
        <Button content={'Create an account'} size={'medium'} backgroundColor={'blue'} action={() => setIsAuthFormVisible(true)}/>
        {/*<div className={'soldout-counter-container'}>*/}
        {/*    games sold: <span>53891</span>*/}
        {/*</div>*/}
    </div>);
}