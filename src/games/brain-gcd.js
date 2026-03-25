import { runGameEngine } from '../game-engine.js'
import { getRandomNumber } from '../utils.js'

export const startGame = () => {
  runGameEngine(getGameData())
}

const getGameData = () => {
  const gameData = {
    rules: 'Find the greatest common divisor of given numbers.',
    getRoundData,
  }

  return gameData
}

const getRoundData = () => {
  const maxNumber = 100

  const numberOne = getRandomNumber(1, maxNumber)
  const numberTwo = getRandomNumber(1, maxNumber)

  const roundData = {
    question: `${numberOne} ${numberTwo}`,
    correctAnswer: `${getGcd(numberOne, numberTwo)}`,
  }

  return roundData
}

const getGcd = (numberOne, numberTwo) => {
  let a = numberOne
  let b = numberTwo

  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}
