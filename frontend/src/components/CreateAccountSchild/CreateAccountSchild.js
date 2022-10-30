import './CreateAccountSchild.scss';
import Button from "../Button/Button";

export default function CreateAccountSchild() {
    return (<div className={'schild-container'}>
        <div className={'schild-title'}>To buy games
            create an account
        </div>
        <Button content={'Create an account'} backgroundColor={'blue'}/>
        <div className={'soldout-counter-container'}>
            games sold: <span>53891</span>
        </div>
    </div>);
}