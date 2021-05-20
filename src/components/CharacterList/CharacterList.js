import './style.scss';
import React from "react";
import { CharacterItem } from "./CharacterItem";
import { Loader } from "../Loader";

export const CharacterList = ({ people, loading, searchValue }) => {

    return (
        <div className="list">
            {loading
                ? <Loader/>
                : people
                    .filter(item => (item.name.toLowerCase().includes(searchValue)))
                    .map(item =>
                        <CharacterItem key={item.url} {...item} />
                    )
            }
        </div>
    )
}