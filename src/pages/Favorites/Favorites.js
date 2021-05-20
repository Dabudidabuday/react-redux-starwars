import './style.scss';
import React from "react";
import background from '../../assets/images/backgrounds/hero-background.jpg';
import PropTypes from 'prop-types';
export const Favorites = ({ heroes, toHeroPage=f=>f, removeHero=f=>f }) => {

    const onRemove = (name) => {
        removeHero(name)
    }

    return (
        <div
            className="page favorites"
            style={{ backgroundImage: `url(${background})`}}
        >
            <div className="container">
                <h1 className="h1 favorites__title">Favorites List</h1>

                <div className="favorites__list">
                    {!heroes
                        ? <span>Heroes is loading</span>
                        : heroes.map((hero, i) => (
                            <div className="favorites__item" key={i}>
                                <button
                                    onClick={() => toHeroPage(hero.name)}
                                    className="btn btn-primary"

                                >{hero.name}
                                </button>

                                <span
                                    onClick={() => onRemove(hero.name)}
                                    className="btn btn-remove"
                                >x
                                </span>
                            </div>
                            )
                        )
                    }
                </div>

            </div>
        </div>
    )
}

Favorites.propTypes = {
    heroes: PropTypes.array,
    toHeroPage: PropTypes.func,
    onRemove: PropTypes.func
}