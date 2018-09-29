import * as React from "react";
import "./SideDrawer.css";

export interface ISideDrawer { show: boolean, closeDrawer: any };

export const SideDrawer = (props: ISideDrawer) => {
    let drawerClass = "side-drawer";
    if(props.show) { 
        drawerClass = "side-drawer open"; 
    }

    return (
        <nav className={drawerClass}>
            <button onClick={props.closeDrawer}>{"<- Close"}</button>
            <ul>
                <li><a href="#">Registration</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    );
}
