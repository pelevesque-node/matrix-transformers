/* global describe, it */
'use strict'

const expect = require('chai').expect
const matrixTransformers = require('../index')

describe('#matrixTransformers', () => {
  describe('#rotate90()', () => {
    it('should rotate a square matrix 90 degrees clockwise', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const result = JSON.stringify(matrixTransformers.rotate90(matrix))
      const expected = JSON.stringify([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ])
      expect(result).to.equal(expected)
    })

    it('should rotate a rectangular matrix 90 degrees clockwise', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
      const result = JSON.stringify(matrixTransformers.rotate90(matrix))
      const expected = JSON.stringify([
        [5, 3, 1],
        [6, 4, 2]
      ])
      expect(result).to.equal(expected)
    })
  })

  describe('#rotate180()', () => {
    it('should rotate a square matrix 180 degrees clockwise', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const result = JSON.stringify(matrixTransformers.rotate180(matrix))
      const expected = JSON.stringify([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
      ])
      expect(result).to.equal(expected)
    })

    it('should rotate a rectangular matrix 180 degrees clockwise', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
      const result = JSON.stringify(matrixTransformers.rotate180(matrix))
      const expected = JSON.stringify([
        [6, 5],
        [4, 3],
        [2, 1]
      ])
      expect(result).to.equal(expected)
    })
  })

  describe('#rotate270()', () => {
    it('should rotate a square matrix 270 degrees clockwise', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const result = JSON.stringify(matrixTransformers.rotate270(matrix))
      const expected = JSON.stringify([
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7]
      ])
      expect(result).to.equal(expected)
    })

    it('should rotate a rectangular matrix 270 degrees clockwise', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
      const result = JSON.stringify(matrixTransformers.rotate270(matrix))
      const expected = JSON.stringify([
        [2, 4, 6],
        [1, 3, 5]
      ])
      expect(result).to.equal(expected)
    })
  })

  describe('#reflectHorizontally()', () => {
    it('should reflect a square matrix horizontally', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const result = JSON.stringify(matrixTransformers.reflectHorizontally(matrix))
      const expected = JSON.stringify([
        [3, 2, 1],
        [6, 5, 4],
        [9, 8, 7]
      ])
      expect(result).to.equal(expected)
    })

    it('should reflect a rectangular matrix horizontally', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
      const result = JSON.stringify(matrixTransformers.reflectHorizontally(matrix))
      const expected = JSON.stringify([
        [2, 1],
        [4, 3],
        [6, 5]
      ])
      expect(result).to.equal(expected)
    })
  })

  describe('#reflectVertically()', () => {
    it('should reflect a square matrix vertically', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const result = JSON.stringify(matrixTransformers.reflectVertically(matrix))
      const expected = JSON.stringify([
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3]
      ])
      expect(result).to.equal(expected)
    })

    it('should reflect a rectangular matrix vertically', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
      const result = JSON.stringify(matrixTransformers.reflectVertically(matrix))
      const expected = JSON.stringify([
        [5, 6],
        [3, 4],
        [1, 2]
      ])
      expect(result).to.equal(expected)
    })
  })
})
