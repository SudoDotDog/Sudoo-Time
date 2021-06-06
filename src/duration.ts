/**
 * @author WMXPY
 * @namespace Time
 * @description Duration
 */

import { floorIfNeeded } from "./util";

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

        this._milliseconds = this._parseMilliseconds(config);
    }

    public toMilliseconds(): number {

        return this._milliseconds;
    }

    public toSeconds(floor?: boolean): number {

        return floorIfNeeded(
            this.toMilliseconds() / 1000,
            floor,
        );
    }

    public toMinutes(floor?: boolean): number {

        return floorIfNeeded(
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            this.toSeconds() / 60,
            floor,
        );
    }

    public toHours(floor?: boolean): number {

        return floorIfNeeded(
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            this.toMinutes() / 60,
            floor,
        );
    }

    public toDays(floor?: boolean): number {

        return floorIfNeeded(
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            this.toHours() / 24,
            floor,
        );
    }

    private _parseMilliseconds(config: DurationConfig): number {

        return 0;
    }
}
