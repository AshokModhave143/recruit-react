import * as enzyme from "enzyme";
import * as React from "react";

import { Backdrop, IBackdrop } from "./Backdrop";

it('renders backgrop correctly and blurs background', () => {
    const click = (e: any) => {
        expect(e).toBe(true);
    };
    const backdrop = enzyme.shallow(<Backdrop click={click}/>);
    expect(backdrop.find('.backdrop')).toBe(true);
});