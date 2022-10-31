import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from "./App";
import UserStore from "./store/UserStore";
import GameStore from "./store/GameStore";
import AuthFormStore from "./store/AuthFormStore";
import CartStore from "./store/cartStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            game: new GameStore(),
            authForm: new AuthFormStore(),
            cart: new CartStore(),
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);
