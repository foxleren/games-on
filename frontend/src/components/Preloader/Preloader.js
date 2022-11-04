import React from 'react';
import usePreloader from "../../hooks/usePreloader";
import './Preloader.scss'

const Preloader = () => {
    const {isPreloaderVisible} = usePreloader()
    return (
        <div className={`preloader-background ${isPreloaderVisible ? 'visible' : 'hidden'}`}>
            <div className="preloader-content">
                <div className={'logo-full'}/>
            </div>
        </div>
    );
};

export default Preloader;
