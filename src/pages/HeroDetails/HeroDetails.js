import './style.scss';
import React from "react";
import background from '../../assets/images/backgrounds/hero-background.jpg';
import { HeroDescription } from "./components";
import { Loader } from "../../components/Loader";
import PropTypes from 'prop-types';
import { Tabs } from "../../components";

export const HeroDetails = ({hero={}, loading=false, addHero=f=>f}) => {

    return (
        <div
            className="page hero-details"
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="container">
                {loading
                    ? <Loader/>
                    : <HeroDescription hero={hero}/>
                }

                <button className="btn btn-primary" type="button" onClick={addHero}>
                    Add To Favorites
                </button>


            </div>

            <Tabs hero={hero}/>
        </div>
    )
}

HeroDetails.propTypes = {
    hero: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    addHero: PropTypes.func
}


