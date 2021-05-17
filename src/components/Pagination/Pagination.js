import './style.scss';
import React from "react";

export const Pagination = ({ pages, current }) => {
    return (
        <div className="pagination">
            {pages.map((page, i) =>
                <span key={i} className={current ? 'pagination__item current' : 'pagination__item'}>
                    {page}
                </span>
            )}
        </div>
    )
}