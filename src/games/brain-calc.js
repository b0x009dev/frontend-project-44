import { getRandomNumber } from '../utils.js'

const maxNumber = 10

export const brainCalcRules = () => 'What is the result of the expression?'

const operations = ['+', '-', '*']

export const brainCalcRound = () => {
  const operation = operations[getRandomNumber(0, operations.length - 1)]

  const numberOne = getRandomNumber(0, maxNumber)
  const numberTwo = getRandomNumber(0, maxNumber)

  let correctAnswer

  switch (operation) {
    case '+':
      correctAnswer = numberOne + numberTwo
      break

    case '-':
      correctAnswer = numberOne - numberTwo
      break

    case '*':
      correctAnswer = numberOne * numberTwo
      break

    default:
      throw new Error(`Unexpected value: ${operation}`)
  }

  const round = {
    question: `${numberOne} ${operation} ${numberTwo}`,
    correctAnswer: `${correctAnswer}`,
  }

  return round
}
