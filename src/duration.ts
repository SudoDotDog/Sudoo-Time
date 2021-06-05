/**
 * @author WMXPY
 * @namespace Time
 * @description Duration
 */

export type DurationConfig = {

    readonly hours?: number;
    readonly minutes?: number;
    readonly seconds?: number;
};

export class Duration {

    public static of(config: DurationConfig): Duration {

        return new Duration(config);
    }

    private readonly _milliseconds: number;

    private constructor(config: DurationConfig) {

        this._milliseconds = config.seconds as number;
    }
}
