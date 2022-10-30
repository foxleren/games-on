import './Header.scss';
import Button from "../Button/Button";
import useAuthForm from "../../hooks/useAuthForm";
import { Link } from "react-router-dom";

export default function Header() {
    const {setIsAuthFormVisible} = useAuthForm();
    return (
        <header>
            <div className={'header-container'}>
                <Link to={'/'}>
                    <div className={'header-logo'}/>
                </Link>
                <div className={'header-menu'}>
                    <div className={'header-menu-item'}>All games</div>
                    <div className={'header-menu-item'}>Leaderboard</div>
                    <div className={'header-menu-item'}>Contacts</div>
                    <div className={'header-menu-item'}>Personal account</div>
                </div>
                <div className={'header-right'}>
                    <Link to={'/cart'}>
                        <div className={'header-cart'}/>
                    </Link>
                    <Button backgroundColor={'blue'} content={'Log in / Register'}
                            action={() => setIsAuthFormVisible(true)}/>
                </div>
            </div>
        </header>
    );
}