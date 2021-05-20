import './style.scss';
import React from "react";
import { TemplateWithSidebar } from '../../templates';
import { CharacterList } from "../../components";
import background from '../../assets/images/backgrounds/main-background.jpg';
import {Pagination} from "../../components/Pagination/Pagination";

export const Peoples = () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div
            className="page peoples-list"
            style={{backgroundImage: `url(${background})`}}
        >
            <TemplateWithSidebar additional='jc-center'>
                <div className="characters">
                    <h2 className="h2 characters__title">Characters</h2>

                    <CharacterList />
                    <Pagination pages={pages}/>
                </div>
            </TemplateWithSidebar>
        </div>
    )
}