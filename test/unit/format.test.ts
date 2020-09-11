/**
 * @author WMXPY
 * @namespace Time
 * @description Format
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { preFormat, PreFormatResult } from "../../src";

describe('Given [Format] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('time-format');

    it('should be able pre format date', (): void => {

        const now: Date = new Date();
        const formatted: PreFormatResult = preFormat(now);

        expect(typeof formatted.year).to.be.equal('number');
    });
});
