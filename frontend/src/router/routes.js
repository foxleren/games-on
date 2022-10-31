import CartPage from "../pages/CartPage/CartPage";
import {ACCOUNT_ROUTE, CART_ROUTE, GAME_ROUTE, HOME_ROUTE, NOTFOUND_ROUTE} from "../utils/consts";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/PorductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const authRoutes = [
    {
        path: CART_ROUTE,
        Component: <CartPage/>
    },
    {
        path: ACCOUNT_ROUTE,
        Component: <CartPage/> // Здесь будет ЛК
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <HomePage/>
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: <ProductPage/>
    },
    {
        path: NOTFOUND_ROUTE,
        Component: <NotFoundPage/>
    },
]