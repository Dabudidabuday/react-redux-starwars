import './style.scss';
import React, {useState} from 'react';
import TabItem from "./TabItem";

export const Tabs = ({ hero }) => {
    const [ active, setActive ] = useState(null);

    const tabs = [
        'films',
        'species',
        'starships'
    ];

    const openTab = (e) => setActive(+e.currentTarget.dataset.index);

    return (

        <div className="tabs">
            <div className="tabs__header">
                {tabs.map((tab, i) =>
                    <button
                        key={i}
                        className={`btn btn-tab ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                    >
                        {tab}
                    </button>
                )}
            </div>

            <div className="tabs__body">
                {tabs[active] && <TabItem hero={hero} tab={tabs[active]} />}
            </div>
        </div>
    )
}

