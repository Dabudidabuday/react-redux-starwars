import React from "react";
import { Sidebar } from '../../components';

export const TemplateWithSidebar = ({ children, additional }) => {
    return (
        <div className={`flex-container ${additional}`}>
            {children}
            <Sidebar/>
        </div>
    )
}