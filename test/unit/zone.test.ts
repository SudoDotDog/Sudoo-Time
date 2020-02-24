/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 * @override Unit Test
 */

import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
import { expect } from "chai";
import * as Chance from "chance";
import { ZONE_SYMBOL } from "../../src/declare";
import { Time } from "../../src/time";
import { TimeZone } from "../../src/zone";

// tslint:disable: no-magic-numbers
describe('Given {TimeZone} class', (): void => {

    const chance: Chance.Chance = new Chance('time-zone');

    it('should be able to get time zone offset', (): void => {

        const area: ZONE_SYMBOL = ZONE_SYMBOL.Y; // -12
        const zone: TimeZone = TimeZone.offset(area);

        const result: number = zone.getTimeOffset();

        expect(result).to.be.equal(area * TIME_IN_MILLISECONDS.HOUR);
    });

    it('should be able to get time class from time', (): void => {

        const area: ZONE_SYMBOL = ZONE_SYMBOL.Y; // -12
        const zone: TimeZone = TimeZone.offset(area);

        const time: Time = zone.fromNumber(2000, 1, 1);
        const utcTime: number = time.getTime();

        const utcDate: Date = new Date();

        utcDate.setUTCFullYear(2000);
        utcDate.setUTCMonth(0);
        utcDate.setUTCDate(1);
        utcDate.setUTCHours(0);
        utcDate.setUTCMinutes(0);
        utcDate.setUTCSeconds(0);
        utcDate.setUTCMilliseconds(0);

        const difference: number = utcTime - utcDate.getTime();

        expect(difference).to.be.equal(area * TIME_IN_MILLISECONDS.HOUR * -1);
    });

    it('should be able to fix utc date', (): void => {

        const area: ZONE_SYMBOL = ZONE_SYMBOL.S; // -6
        const zone: TimeZone = TimeZone.offset(area);

        const utcDate: Date = new Date();

        utcDate.setUTCFullYear(2020);
        utcDate.setUTCMonth(0);
        utcDate.setUTCDate(10);
        utcDate.setUTCHours(8);
        utcDate.setUTCMinutes(0);
        utcDate.setUTCSeconds(0);
        utcDate.setUTCMilliseconds(0);

        const fixedDateTime: number = zone.reverseFixUTCDate(utcDate);

        const difference: number = fixedDateTime - utcDate.getTime();

        expect(difference).to.be.equal(area * TIME_IN_MILLISECONDS.HOUR * -1);
    });
});
// tslint:enable: no-magic-numbers
