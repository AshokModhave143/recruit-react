import * as React from "react";
import "./DrawerToggleButton.css";

export interface IDrawerToggleButton { props: any };

export const DrawerToggleButton = (props: IDrawerToggleButton) => (
    <button className="toggle-button">
        <div className="toggle-button-line">{''}</div>
        <div className="toggle-button-line">{''}</div>
        <div className="toggle-button-line">{''}</div>
    </button>
);