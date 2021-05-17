import './style.scss';
import React from 'react';
import lightSaber from '../../assets/images/icons/lighsaber.png';

export const Loader = () => {
    return (
        <div className="loader">
                <img src={lightSaber} alt=""/>
        </div>
    )
}