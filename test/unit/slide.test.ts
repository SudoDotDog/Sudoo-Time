/**
 * @author WMXPY
 * @namespace Time
 * @description Slide
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { slideCurrentDate } from "../../src/slide";

describe('Given [Slide] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('time-slide');

    it('should be able create current date', (): void => {

        const now: Date = new Date();
        const currentDate: Date = slideCurrentDate(now);

        expect(currentDate.getTime()).to.be.equal(now.getTime());
    });
});
