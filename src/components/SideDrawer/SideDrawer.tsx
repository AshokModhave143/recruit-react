import * as React from "react";
import "./SideDrawer.css";

export interface ISideDrawer { props: any };

export const SideDrawer = (props: ISideDrawer) => (
    <nav className="side-drawer">
        <ul>
            <li><a href="#">Registration</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>
);
