import * as React from "react";
import "./Backdrop.css";

export interface IBackdrop { props: any };

export const Backdrop = (props: IBackdrop) => (
    <div className="backdrop" />
);