import { getRandomNumber } from '../utils.js'

const MAX_NUMBER = 10

export const brainCalcRules = () => `What is the result of the expression?`

const OPERATIONS_COUNT = 3
const operations = ['+', '-', '*']

export const brainCalcRound = () => {
  const operation = operations[getRandomNumber(0, OPERATIONS_COUNT - 1)]

  const numberOne = getRandomNumber(0, MAX_NUMBER)
  const numberTwo = getRandomNumber(0, MAX_NUMBER)

  let correctAnswer

  if (operation === '+') {
    correctAnswer = (+numberOne + +numberTwo)
  }

  if (operation === '-') {
    correctAnswer = (+numberOne - +numberTwo)
  }

  if (operation === '*') {
    correctAnswer = (+numberOne * +numberTwo)
  }

  const round = {
    question: `${numberOne} ${operation} ${numberTwo}`,
    correctAnswer: `${correctAnswer}`,
  }

  return round
}
