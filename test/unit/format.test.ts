/**
 * @author WMXPY
 * @namespace Time
 * @description Format
 * @override Unit Test
 */

import * as Chance from "chance";
import { preFormat, PreFormatResult } from "../../src";

describe('Given [Format] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('time-format');

    it('should be able pre format date', (): void => {

        const now: Date = new Date();
        const formatted: PreFormatResult = preFormat(now);

        console.log(formatted);
        console.log(now.toUTCString());
    });
});
