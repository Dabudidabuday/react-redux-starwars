import './style.scss';
import React from "react";

export const Pagination = ({ goPrev, goNext }) => {
    return (
        <div className="pagination">
            <button className="btn btn-pagination" onClick={() => goPrev}><span className="arrow left"> </span>Previous</button>
            <button className="btn btn-pagination" onClick={goNext}>Next<span className="arrow right"> </span></button>
        </div>
    )
}