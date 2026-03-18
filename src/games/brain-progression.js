import { getRandomNumber } from '../utils.js'

const maxStart = 20
const maxStep = 10
const minCount = 5
const maxCount = 12

export const brainProgressionRules = () => 'What number is missing in the progression?'

export const brainProgressionRound = () => {
  const start = getRandomNumber(0, maxStart)
  const step = getRandomNumber(1, maxStep)
  const count = getRandomNumber(minCount, maxCount)
  const hiddenIndex = getRandomNumber(0, count - 1)

  const progression = makeProgression(start, step, count)

  const round = {
    question: progression.map((value, index) => (index === hiddenIndex ? '..' : String(value))).join(' '),
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
