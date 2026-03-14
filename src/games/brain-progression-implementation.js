import { getRandomNumber } from '../utils.js'

const MAX_START = 20
const MAX_STEP = 10
const MIN_COUNT = 5
const MAX_COUNT = 12

export const brainProgressionRules = () => 'What number is missing in the progression?'

export const brainProgressionRound = () => {
  const start = getRandomNumber(0, MAX_START)
  const step = getRandomNumber(1, MAX_STEP)
  const count = getRandomNumber(MIN_COUNT, MAX_COUNT)
  const hiddenIndex = getRandomNumber(0, count - 1)

  const progression = makeProgression(start, step, count)

  const progressionStr = progression.join(' ').replace(progression[hiddenIndex].toString(), '..')

  const round = {
    question: progressionStr,
    correctAnswer: `${progression[hiddenIndex]}`,
  }

  return round
}

const makeProgression = (start, step, count) => {
  const progression = []

  for (let i = 0; i < count; i += 1) {
    progression.push(start + step * i)
  }

  return progression
}
