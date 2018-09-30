import * as React from "react";
import { DrawerToggleButton } from "./../SideDrawer/DrawerToggleButton";
import './Menubar.css';

export interface IMenubar { drawerClickHandler: any, user: any };

export const Menubar = (props: IMenubar) => (
    <header className="menubar">
            <nav className="menubar-nav">
                <div>
                    <DrawerToggleButton {...props} />
                </div>
                <div className="menubar-logo"><a href="#">Register Card Form</a></div>
                <div className="spacer">{''}</div>
                <div className="menubar-nav-items">
                    <ul>
                        <li><div className="user">Welcome, {props.user.firstName}</div></li>
                    </ul>
                </div>
            </nav>
        </header>
);
