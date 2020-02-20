/**
 * @author WMXPY
 * @namespace Time
 * @description Util
 */

import { TIMEZONE } from "./declare";

export const verifyZoneOffset = (zone: number): boolean => {

    const reverseCheckResult: string = TIMEZONE[zone];
    return typeof reverseCheckResult === 'string';
};
