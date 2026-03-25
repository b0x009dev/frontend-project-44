import { runGameEngine } from '../game-engine.js'
import { getRandomNumber } from '../utils.js'

export const startGame = () => {
  runGameEngine(getGameData())
}

const getGameData = () => {
  const gameData = {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    getRoundData,
  }

  return gameData
}

const getRoundData = () => {
  const maxNumber = 100

  const number = getRandomNumber(0, maxNumber)

  const roundData = {
    question: `${number}`,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  }

  return roundData
}

const isEven = number => number % 2 === 0
