import React from 'react';
import './Sidebar.css';
import DashboardIcon from '@material-ui/icons/Dashboard';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PowerIcon from '@material-ui/icons/Power';
import SidebarOption from './SidebarOption';
import PanToolIcon from '@material-ui/icons/PanTool';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SubjectIcon from '@material-ui/icons/Subject';
import PaymentIcon from '@material-ui/icons/Payment';
import { IconButton } from '@material-ui/core';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_upper">
            
            <DashboardIcon />
        
           
            <h3>Dashboard</h3>
            </div>
           
            <div className="sidebar_middle1">
                <h3>@ EMAIL VERIFICATION</h3>
            <SidebarOption Icon={AccountCircleIcon} title="Single email verification"/>
            <SidebarOption Icon={AllInboxIcon} title="Bulk email verification"/>
            <SidebarOption Icon={SystemUpdateAltIcon} title="Download verified result"/>
            <SidebarOption Icon={PowerIcon} title = "Email verification API"/>

            </div>

           
            <div className="sidebar_middle2">
                <div className="sidebar_middle2Heading">
                <PanToolIcon/>
                <h3>INTEGRATION</h3> 
                </div>
                <SidebarOption Icon={FormatListBulletedIcon } title="My Apps"/>
                <SidebarOption Icon={SubjectIcon} title="Email Tools"/>
            </div>
         

           <div className="sidebar_footer">
           <div className="sidebar_footer2Heading">
                <PanToolIcon/>
                <h3>BILLING</h3> 
            </div>
            <SidebarOption Icon={FormatListBulletedIcon } title="Manage Plan"/>
                <SidebarOption Icon={SubjectIcon} title="Invoices"/>
                <SidebarOption Icon={PaymentIcon} title="Buy Credits"/>
            
           </div>
           
            <hr/>


        </div>
    )
}

export default Sidebar;
