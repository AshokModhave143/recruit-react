import * as React from "react";
import { DrawerToggleButton } from "./../SideDrawer/DrawerToggleButton";
import './Menubar.css';

export interface IMenubar { props: any };

export const Menubar = (props: IMenubar) => (
    <header className="menubar">
            <nav className="menubar-nav">
                <div>
                    <DrawerToggleButton props={{}}/>
                </div>
                <div className="menubar-logo"><a href="#">LOGO</a></div>
                <div className="spacer">{''}</div>
                <div className="menubar-nav-items">
                    <ul>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">User</a></li>
                    </ul>
                </div>
            </nav>
        </header>
);
