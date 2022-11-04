import React from 'react';
import './NotFoundPage.scss'
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className={'not-found-page'}>
            <div className={'not-found-page-title'}>
                NOT FOUND PAGE
            </div>

            <a onClick={() => navigate(-1)}>Go back</a>
        </div>
    );
};

export default NotFoundPage;
