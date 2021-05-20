import './style.scss';
import background from '../../assets/images/backgrounds/main-background.jpg';
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TemplateWithSidebar } from '../../templates';
import { CharacterList } from "../../components";
import { Pagination } from "../../components/Pagination/Pagination";
import { peopleActions } from "../../store/people";

export const Peoples = () => {
    const [ prevNextUrl, setPrevNextUrl ] = useState('')
    const { people, loading, searchValue, currentPage } = useSelector(state => state.people);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.getPeople(prevNextUrl));
    }, [prevNextUrl])

    const goPrev = () => {
        const prevUrl = currentPage.previous;
        const params = prevUrl.substring(prevUrl.lastIndexOf('/') + 1);

        setPrevNextUrl(params);
    }

    const goNext = () => {
        const nextUrl = currentPage.next;
        const params = nextUrl.substring(nextUrl.lastIndexOf('/') + 1);
        setPrevNextUrl(params);
    }

    return (
        <div
            className="page peoples-list"
            style={{backgroundImage: `url(${background})`}}
        >
            <TemplateWithSidebar additional='jc-center'>
                <div className="characters">
                    <h2 className="h2 characters__title">Characters</h2>

                    <CharacterList
                        loading={loading}
                        people={people}
                        searchValue={searchValue}
                    />

                    <Pagination
                        goPrev={goPrev}
                        goNext={goNext}
                    />
                </div>
            </TemplateWithSidebar>
        </div>
    )
}