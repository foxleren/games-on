// import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import React from "react";
import AuthFormProvider from "./providers/AuthFormProvider";
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <BrowserRouter>
                <AuthorizationForm/>
                <Header/>
                <AppRouter/>
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
