import './style.scss';
import React from "react";
import {Loader} from "../Loader";

export const Pagination = ({ goPrev=f=>f, goNext=f=>f, currentPage={} }) => {

    return (
        <>
            {!currentPage ? <Loader/>
                : <div className="pagination">
                    <button
                        className={(currentPage.previous) ? 'btn btn-pagination' : 'btn btn-pagination disabled'}
                        onClick={goPrev}
                    >
                        <span className="arrow left"> </span>Previous
                    </button>

                    <button
                        className={(currentPage.next) ? 'btn btn-pagination' : 'btn btn-pagination disabled'}
                        onClick={goNext}
                    >
                        Next<span className="arrow right"> </span>
                    </button>
                </div>
            }
        </>
    )
}