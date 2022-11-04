// import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import React, {useContext, useEffect} from "react";
import AuthFormProvider from "./providers/AuthFormProvider";
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
import Header from "./components/Header/Header";
import PreloaderProvider from "./providers/PreloaderProvider";
import Preloader from "./components/Preloader/Preloader";
import {Context} from "./index";
import {getAllCartItems} from "./http/cartAPI";
import {getLibrary} from "./http/libraryAPI";

export default function App() {
    const {user} = useContext(Context)
    useEffect(() => {
        getAllCartItems().then(data => {
            if (data === null) {
                data = []
            }
            user.setCartItems(data)
            //cart.setCartItems(data)
        })
        getLibrary().then(data => {
            if (data === null) {
                data = []
            }
            //console.log(data)
            user.setLibrary(data)
        })
    }, [user.isAuth])

    const token = localStorage.getItem('token')
    console.log(token)
    if (token != null) {
        user.setIsAuth(true)
    }
    return (
        <BrowserRouter>
            <PreloaderProvider>
                <AuthFormProvider>
                    <Preloader/>
                    <AuthorizationForm/>
                    <Header/>
                    <AppRouter/>
                </AuthFormProvider>
            </PreloaderProvider>
        </BrowserRouter>
        // <div className="App">
        //     <AuthFormProvider><AuthorizationForm/>
        //         <HashRouter>
        //             <Routes>
        //                 <Route path={'/'} element={<><Header/>
        //                     <HomePage/></>}/>
        //                 <Route path={'/cart'} element={<><Header/>
        //                     <CartPage/></>}/>
        //                 <Route path={'/product'} element={<><Header/>
        //                     <ProductPage/></>}/>
        //             </Routes>
        //         </HashRouter>
        //         {/*<Footer/>*/}
        //     </AuthFormProvider>
        // </div>
    );
}
