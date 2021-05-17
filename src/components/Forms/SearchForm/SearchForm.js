import './style.scss';
import React from "react";
import { useDispatch } from "react-redux";
import { peopleActions } from "../../../store/people";

export const SearchForm = () => {
    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     const form = e.currentTarget;
    //     const nameValue = form['name'].value;
    // }

    const handleChange = (e) => {
        dispatch(peopleActions.setSearchValue(e.target.value));
        dispatch(peopleActions.filterPeople(e.target.value));
    }

    return (
        <form className="form">
            <input
                type="text"
                className="form-input"
                placeholder="Search by name"
                name="name"
                onChange={handleChange}
            />
        </form>
    )
}