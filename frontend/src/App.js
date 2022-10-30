// import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
import AuthFormProvider from "./providers/AuthFormProvider";
import CartPage from "./pages/CartPage/CartPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/PorductPage/ProductPage";

export default function App() {
    return (
        <div className="App">
            <AuthFormProvider><AuthorizationForm/>
                <HashRouter>
                    <Routes>
                        <Route path={'/'} element={<><Header/>
                            <HomePage/></>}/>
                        <Route path={'/cart'} element={<><Header/>
                            <CartPage/></>}/>
                        <Route path={'/product'} element={<><Header/>
                            <ProductPage/></>}/>
                    </Routes>
                </HashRouter>
                {/*<Footer/>*/}
            </AuthFormProvider>
        </div>);
}
