import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {movePageTop} from "../utils/funcs";

export const PreloaderContext = createContext({isPreloaderVisible: false});

export default function PreloaderProvider({children}) {
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const showPreloader = () => {
        setIsPreloaderVisible(true)
        movePageTop()
        setTimeout(() => {
            setIsPreloaderVisible(false)
        }, 550)
    }
    const navigate = useNavigate()
    const navigateToWithPreloader = (route) => {
        showPreloader()
        navigate(route)
    }
    return (<PreloaderContext.Provider
        value={{isPreloaderVisible, setIsPreloaderVisible, showPreloader, navigateToWithPreloader}}>
        {children}
    </PreloaderContext.Provider>);
}