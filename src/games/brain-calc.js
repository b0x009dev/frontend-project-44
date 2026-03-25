import { runGameEngine } from '../game-engine.js'
import { getRandomNumber } from '../utils.js'

export const startGame = () => {
  runGameEngine(getGameData())
}

const getGameData = () => {
  const gameData = {
    rules: 'What is the result of the expression?',
    getRoundData,
  }

  return gameData
}

const getRoundData = () => {
  const maxNumber = 10

  const operations = ['+', '-', '*']

  const operation = operations[getRandomNumber(0, operations.length - 1)]

  const numberOne = getRandomNumber(0, maxNumber)
  const numberTwo = getRandomNumber(0, maxNumber)

  const correctAnswer = calculate(operation, numberOne, numberTwo)

  const roundData = {
    question: `${numberOne} ${operation} ${numberTwo}`,
    correctAnswer: `${correctAnswer}`,
  }

  return roundData
}

const calculate = (operation, numberOne, numberTwo) => {
  switch (operation) {
    case '+':
      return numberOne + numberTwo

    case '-':
      return numberOne - numberTwo

    case '*':
      return numberOne * numberTwo

    default:
      throw new Error(`Unexpected value: ${operation}`)
  }
}
