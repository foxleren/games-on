import {useContext} from "react";
import {AuthFormContext} from '../providers/AuthFormProvider';

export default function useAuthForm() {
    return useContext(AuthFormContext);
}