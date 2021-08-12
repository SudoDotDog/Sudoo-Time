# Sudoo-Time

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Time/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Time/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Time/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Time)
[![npm version](https://badge.fury.io/js/%40sudoo%2Ftime.svg)](https://www.npmjs.com/package/@sudoo/time)
[![downloads](https://img.shields.io/npm/dm/@sudoo/time.svg)](https://www.npmjs.com/package/@sudoo/time)

Time Controller

## Install

```sh
yarn add @sudoo/time
# Or
npm install @sudoo/time --save
```

## Usage

### Duration

```ts
import { Duration } from "@sudoo/time";

const duration: Duration = Duration.of({
    minutes: 5,
});

setTimeout(() => {
    executeThisAfterFiveMinutes();
}, duration.toMilliseconds());
```
