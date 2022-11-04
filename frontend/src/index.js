import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from "./App";
import UserStore from "./store/UserStore";
import GameStore from "./store/GameStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//<React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(), game: new GameStore(),
    }}>
        <App/>
    </Context.Provider>
//</React.StrictMode>
);
