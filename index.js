'use strict'

exports.rotate90 = function (matrix) {
  let data
  const transformed = []
  for (let col = 0, len = matrix[0].length; col < len; col++) {
    data = []
    for (let row = matrix.length - 1; row >= 0; row--) {
      data.push(matrix[row][col])
    }
    transformed.push(data)
  }
  return transformed
}

exports.rotate180 = function (matrix) {
  let data
  const transformed = []
  for (let row = matrix.length - 1; row >= 0; row--) {
    data = []
    for (let col = matrix[0].length - 1; col >= 0; col--) {
      data.push(matrix[row][col])
    }
    transformed.push(data)
  }
  return transformed
}

exports.rotate270 = function (matrix) {
  let data
  const transformed = []
  for (let col = matrix[0].length - 1; col >= 0; col--) {
    data = []
    for (let row = 0, len = matrix.length; row < len; row++) {
      data.push(matrix[row][col])
    }
    transformed.push(data)
  }
  return transformed
}

exports.reflectHorizontally = function (matrix) {
  let data
  const transformed = []
  for (let row = 0, len = matrix.length; row < len; row++) {
    data = []
    for (let col = matrix[0].length - 1; col >= 0; col--) {
      data.push(matrix[row][col])
    }
    transformed.push(data)
  }
  return transformed
}

exports.reflectVertically = function (matrix) {
  let data
  const transformed = []
  for (let row = matrix.length - 1; row >= 0; row--) {
    data = []
    for (let col = 0, len = matrix[0].length; col < len; col++) {
      data.push(matrix[row][col])
    }
    transformed.push(data)
  }
  return transformed
}

module.exports = exports
