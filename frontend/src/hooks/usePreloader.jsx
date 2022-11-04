import {useContext} from "react";
import {PreloaderContext} from '../providers/PreloaderProvider';

export default function usePreloader() {
    return useContext(PreloaderContext);
}