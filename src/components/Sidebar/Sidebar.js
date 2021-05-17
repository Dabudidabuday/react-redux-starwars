import './style.scss';
import React from "react";
import {SearchForm} from "../Forms/SearchForm";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2 className="h2">Find your Favorites</h2>

            <SearchForm/>
        </aside>
    )
}