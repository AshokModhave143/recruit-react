import * as React from "react";
import "./Backdrop.css";

export interface IBackdrop { click: any };

export const Backdrop = (props: IBackdrop) => (
    <div className="backdrop" onClick={props.click}/>
);