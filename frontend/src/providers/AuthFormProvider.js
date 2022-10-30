import {createContext, useState} from "react";

export const AuthFormContext = createContext({isAuthFormVisible: false});

export default function AuthFormProvider({children}) {
    const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);
    return (<AuthFormContext.Provider value={{isAuthFormVisible, setIsAuthFormVisible}}>
        {children}
    </AuthFormContext.Provider>);
}