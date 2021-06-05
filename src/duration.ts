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

    private milliseconds: number;

    private constructor(config: DurationConfig) {

        this.milliseconds = config.seconds as number;
    }
}
