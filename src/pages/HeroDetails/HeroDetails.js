import './style.scss';
import React, {useEffect, useState} from "react";
import background from '../../assets/images/backgrounds/hero-background.jpg';
import { useParams } from 'react-router-dom';
import { HeroDescription } from "./components";
import { Loader } from "../../components/Loader";

export const HeroDetails = ({hero={}, loading}) => {

    return (
        <div
            className="page hero-details"
            style={{backgroundImage: `url(${background})`}}
        >
            {loading
                ? <Loader/>
                : <HeroDescription hero={hero}/>
            }
        </div>
    )
}