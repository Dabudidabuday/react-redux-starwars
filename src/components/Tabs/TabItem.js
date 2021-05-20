import React from 'react';
import TabItemHOC from "./TabItemHOC";

const TabItem = ({ tab }) => {
    return (
        <div className="tabs__item">
            {tab}
        </div>
    )
}

export default TabItemHOC(TabItem)