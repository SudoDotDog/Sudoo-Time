/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 * @override Unit Test
 */

import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
import { expect } from "chai";
import * as Chance from "chance";
import { TIMEZONE } from "../../src/declare";
import { TimeZone } from "../../src/zone";

describe('Given {TimeZone} class', (): void => {

    const chance: Chance.Chance = new Chance('time-zone');

    it('should be able to get time zone offset', (): void => {

        const area: TIMEZONE = TIMEZONE.Y; // -12
        const zone: TimeZone = TimeZone.offset(area);

        const result: number = zone.getTimeOffset();

        expect(result).to.be.equal(area * TIME_IN_MILLISECONDS.HOUR);
    });
});
