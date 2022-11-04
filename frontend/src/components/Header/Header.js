import './Header.scss';
import Button from "../Button/Button";
import {ACCOUNT_ROUTE, CART_ROUTE, HOME_ROUTE} from "../../utils/consts";
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import useAuthForm from "../../hooks/useAuthForm";
import usePreloader from "../../hooks/usePreloader";

const Header = observer(() => {
    const {user, cart} = useContext(Context)
    const {isAuthFormVisible, setIsAuthFormVisible} = useAuthForm()
    const {navigateToWithPreloader, showPreloader} = usePreloader()

    const clickCart = () => {
        if (user.isAuth) {
            navigateToWithPreloader(CART_ROUTE)
        } else {
            setIsAuthFormVisible(true)
        }
    }
    return (<header>
        <div className={'header-container'}>
            <div className={'header-logo'} onClick={() => navigateToWithPreloader(HOME_ROUTE)}/>
            <div className={'header-menu'}>
                <div className={'header-menu-item'} onClick={() => navigateToWithPreloader(HOME_ROUTE)}>All games
                </div>
                <div className={'header-menu-item'}>Contacts (disable)</div>
                {user.isAuth &&
                    <div className={'header-menu-item'} onClick={() => navigateToWithPreloader(ACCOUNT_ROUTE)}>Personal
                        account
                    </div>}
            </div>
            <div className={'header-right'}>
                <div className={`header-cart ${user.isAuth && !user.isCartEmpty ? 'full' : 'empty'}`}
                     onClick={() => clickCart()}>
                    <div
                        className={`header-cart-counter ${user.cartItems.length > 0 ? 'visible' : 'hidden'}`}>{user.cartItems.length}</div>
                </div>
                {!user.isAuth ? <Button backgroundColor={'blue'} content={'Log in / Register'}
                                        action={() => setIsAuthFormVisible(true)}/> :
                    <Button backgroundColor={'blue'} content={'Log out'}
                            action={() => {
                                user.setAllParamsClear()
                                localStorage.clear()
                                //window.location.reload()
                            }}/>}
            </div>
        </div>
    </header>);
})

export default Header;