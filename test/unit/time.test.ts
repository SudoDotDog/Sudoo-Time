/**
 * @author WMXPY
 * @namespace Time
 * @description Time
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Time, TIMEZONE } from "../../src";

describe('Given {Time} class', (): void => {

    const chance: Chance.Chance = new Chance('time-time');

    it('should be able to construct', (): void => {

        const now: Date = new Date();
        const time: Time = Time.withDate(now, TIMEZONE.C);

        expect(time).to.be.instanceOf(Time);
    });
});
