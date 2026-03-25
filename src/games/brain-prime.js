import { runGameEngine } from '../game-engine.js'
import { getRandomNumber } from '../utils.js'

export const startGame = () => {
  runGameEngine(getGameData())
}

const getGameData = () => {
  const gameData = {
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRoundData,
  }

  return gameData
}

const getRoundData = () => {
  const maxNumber = 100

  const number = getRandomNumber(1, maxNumber)

  const roundData = {
    question: `${number}`,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  }

  return roundData
}

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false
  }

  return true
}
