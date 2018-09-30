import { ArrowBack } from "@material-ui/icons";
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
            <div className="menu-header">
                <ArrowBack className="back-arrow" onClick={props.closeDrawer} color="primary" />
                <div className="menu-header-title">Menu</div>
            </div>
            <hr />
            <div className="menu-items">
                <ul>
                    <li><a href="#">Card Registration</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>        
        </nav>
    );
}
