import * as React from "react";
import "./DrawerToggleButton.css";

export interface IDrawerToggleButton { drawerClickHandler: any };

export const DrawerToggleButton = (props: IDrawerToggleButton) => (
    <button className="toggle-button" onClick={props.drawerClickHandler}>
        <div className="toggle-button-line">{''}</div>
        <div className="toggle-button-line">{''}</div>
        <div className="toggle-button-line">{''}</div>
    </button>
);