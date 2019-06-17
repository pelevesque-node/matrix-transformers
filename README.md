[![Build Status](https://travis-ci.org/pelevesque/matrix-transformers.svg?branch=master)](https://travis-ci.org/pelevesque/matrix-transformers)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/matrix-transformers/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/matrix-transformers?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# matrix-transformers

A collection of matrix transformation algorithms.

## Node Repository

https://www.npmjs.com/package/@pelevesque/matrix-transformers

## Installation

`npm install @pelevesque/matrix-transformers`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring the Module

```js
const matrixTransformers = require('@pelevesque/matrix-transformers')
```

### Requiring a Particular Transformation

```js
const rotateMatrixClockwise = require('@pelevesque/matrix-transformers').rotate90
```

### Available Transformations

- rotate90
- rotate180
- rotate270
- reflectHorizontally
- reflectVertically

### Examples

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const transformed = matrixTransformers.reflectHorizontally(matrix)

// result
transformed = [
  [3, 2, 1],
  [6, 5, 4],
  [9, 8, 7]
]
```

```js
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
]
const transformed = matrixTransformers.rotate270(matrix)

// result
transformed = [
  [2, 4, 6],
  [1, 3, 5]
]
```
