import './style.scss';
import React from "react";
import { useHistory } from 'react-router-dom';
import background from '../../assets/images/backgrounds/404.webp';

export const NotFound = () => {
    const history = useHistory();

    function goHome() {
        history.push('/');
    }
    return (
        <div
            className="page not-found"
            style={{ backgroundImage: `url('${background}')`}}
        >

            <button
                onClick={goHome}
                className="btn btn-primary btn-back"
            >Go Home</button>
        </div>
    )
}