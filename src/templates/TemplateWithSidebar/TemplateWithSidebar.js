import React from "react";
import { Sidebar } from '../../components';

export const TemplateWithSidebar = ({ children }) => {
    return (
        <div className="flex-container">
            {children}
            <Sidebar/>
        </div>
    )
}