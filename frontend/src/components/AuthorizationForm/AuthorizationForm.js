import './AuthorizationForm.scss';
import React from "react";
import Login from "./Login";
import Register from "./Register";
import useAuthForm from "../../hooks/useAuthForm";

export default function AuthorizationForm() {
    const [isSelectedLoginForm, setIsSelectedLoginForm] = React.useState(true);
    const {isAuthFormVisible, setIsAuthFormVisible} = useAuthForm();

    function checkSwitcherStatus(isLoginForm) {
        if (isLoginForm && isSelectedLoginForm) {
            return 'active';
        }
        if (!isLoginForm && !isSelectedLoginForm) {
            return 'active';
        }
        return '';
    }

    return (<div className={`auth-form-background ${isAuthFormVisible ? 'visible' : 'hidden'}`}>
        <form className="auth-form-container">
            <div className="auth-form-switcher-container">
                <div className={`auth-form-switcher-item ${checkSwitcherStatus(true)}`}
                     onClick={() => setIsSelectedLoginForm(!isSelectedLoginForm)}>Sign-in
                </div>
                <div className={`auth-form-switcher-item ${checkSwitcherStatus(false)}`}
                     onClick={() => setIsSelectedLoginForm(!isSelectedLoginForm)}>Registration
                </div>
            </div>
            <div className="close-popup-button" onClick={() => setIsAuthFormVisible(false)}>
                <svg fill="none" viewBox="0 0 20 20" height="20" width="20"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect xmlns="http://www.w3.org/2000/svg" x="4.69678" y="14.1248" width="13.3333"
                          height="1.66667"
                          rx="0.833333" transform="rotate(-45 4.69678 14.1248)" fill="white"></rect>
                    <rect xmlns="http://www.w3.org/2000/svg" x="5.875" y="4.69669" width="13.3333"
                          height="1.66667"
                          rx="0.833333" transform="rotate(45 5.875 4.69669)" fill="white"></rect>
                </svg>
            </div>

            {isSelectedLoginForm ? <Login/> : <Register/>}
        </form>
    </div>);
}