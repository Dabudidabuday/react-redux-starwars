import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const CharacterItem = ({ name }) => {
    const { url } = useRouteMatch();
    const slug = name.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="item">
            <Link to={`${url}/${slug}`} className="title">{name}</Link>
        </div>
    )
}