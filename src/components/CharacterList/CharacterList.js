import './style.scss';
import React, {useEffect} from "react";
import { CharacterItem } from "./CharacterItem";
import {useDispatch, useSelector} from "react-redux";
import {peopleActions} from "../../store/people";
import {Loader} from "../Loader";

export const CharacterList = () => {
    const { people, loading, searchValue } = useSelector(state => state.people);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.getPeople());
    }, [])

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