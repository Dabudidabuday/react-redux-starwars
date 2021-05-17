import React from 'react';
import { Routing } from "./routing";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
    return (
        <Provider store={store}>
            <Routing/>
        </Provider>
    )
}