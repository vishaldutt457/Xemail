import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon , title}) {
    return (
        <div className="sidebarOption">
            <Icon/>
            <h4 className="sidebarOption_title">
            {title}
            </h4>
        </div>
    )
}

export default SidebarOption
