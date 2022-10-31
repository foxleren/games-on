import './Header.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {CART_ROUTE, HOME_ROUTE} from "../../utils/consts";
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getLibrary} from "../../http/libraryAPI";

const Header = observer(() => {
    const {user, authForm, cart} = useContext(Context)
    return (
        <header>
            <div className={'header-container'}>
                <Link to={HOME_ROUTE}>
                    <div className={'header-logo'}/>
                </Link>
                <div className={'header-menu'}>
                    <Link to={HOME_ROUTE}>
                        <div className={'header-menu-item'}>All games</div>
                    </Link>
                    <div className={'header-menu-item'}>Contacts</div>
                    <div className={'header-menu-item'} onClick={() => getLibrary()}>Personal account</div>
                </div>
                <div className={'header-right'}>
                    <Link to={CART_ROUTE}>
                        <div className={`header-cart ${cart.isCartEmpty ? 'empty' : ''}`}/>
                    </Link>
                    {!user.isAuth && <Button backgroundColor={'blue'} content={'Log in / Register'}
                                             action={() => authForm.setIsAuthFormVisible(true)}/>}
                </div>
            </div>
        </header>
    );
})

export default Header;