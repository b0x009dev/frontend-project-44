import { pipeline } from '../pipeline.js'
import { getRandomNumber } from '../utils.js'

export const startGame = () => {
  pipeline(getGameData())
}

export const getGameData = () => {
  const gameData = {
    rules: 'What number is missing in the progression?',
    getRoundData,
  }

  return gameData
}

const getRoundData = () => {
  const maxStart = 20
  const maxStep = 10
  const minCount = 5
  const maxCount = 12

  const start = getRandomNumber(0, maxStart)
  const step = getRandomNumber(1, maxStep)
  const count = getRandomNumber(minCount, maxCount)
  const hiddenIndex = getRandomNumber(0, count - 1)

  const progression = makeProgression(start, step, count)

  const roundData = {
    question: progression.map((value, index) => (index === hiddenIndex ? '..' : String(value))).join(' '),
    correctAnswer: `${progression[hiddenIndex]}`,
  }

  return roundData
}

const makeProgression = (start, step, count) => {
  const progression = []

  for (let i = 0; i < count; i += 1) {
    progression.push(start + step * i)
  }

  return progression
}
