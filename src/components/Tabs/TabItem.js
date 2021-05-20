import React, {useEffect, useState} from 'react';
import { Loader } from "../Loader";

const TabItem = ({ tab, hero }) => {
    const [content, setContent] = useState([]);
    const tabItems = hero[tab];

    useEffect(() => {
        setContent(prevState => []);

        tabItems.forEach(itemUrl => {
            const response = fetch(itemUrl)
                .then(response => response.json())
                .then(data => setContent(prev => [...prev, data]))
        })
    }, [tab])

    return (
        <div className="tabs__item">
            {!content
                ? <Loader/>
                : content.map((item, i) => (tab === 'films')
                    ? <p key={i}>{item.title}</p>
                    : <p key={i}>{item.name}</p>
                )
            }
        </div>
    )
}

export default TabItem