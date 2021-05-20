import './style.scss';
import React from "react";
import { TemplateWithSidebar } from '../../templates';
import { CharacterList } from "../../components";
import background from '../../assets/images/backgrounds/main-background.jpg';
import { Pagination } from "../../components/Pagination/Pagination";

export const Peoples = () => {

    const goPrev = () => {

    }

    const goNext = () => {

    }

    return (
        <div
            className="page peoples-list"
            style={{backgroundImage: `url(${background})`}}
        >
            <TemplateWithSidebar additional='jc-center'>
                <div className="characters">
                    <h2 className="h2 characters__title">Characters</h2>

                    <CharacterList />
                    <Pagination goPrev={goPrev} goNext={goNext}/>
                </div>
            </TemplateWithSidebar>
        </div>
    )
}