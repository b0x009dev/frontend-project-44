import { input } from '../cli.js'
import { getRandomNumber } from '../utils.js'

const MAX_START = 20
const MAX_STEP = 10
const MIN_COUNT = 5
const MAX_COUNT = 12

export const brainProgressionRules = () => `What number is missing in the progression?`

export const brainProgressionRound = () => {
  const start = getRandomNumber(0, MAX_START)
  const step = getRandomNumber(1, MAX_STEP)
  const count = getRandomNumber(MIN_COUNT, MAX_COUNT)
  const hiddenIndex = getRandomNumber(0, count - 1)

  const progression = makeProgression(start, step, count)

  const progressionStr = progression.join(' ').replace(progression[hiddenIndex].toString(), '..')

  const question = `Question: ${progressionStr}`

  console.log(question)

  const answer = input('Your answer: ')

  let correctAnswer = progression[hiddenIndex].toString()

  const isSuccess = answer === correctAnswer

  if (isSuccess) {
    console.log('Correct!')
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
  }

  return isSuccess
}

const makeProgression = (start, step, count) => {
  const progression = []

  for (let i = 0; i < count; i += 1) {
    progression.push(start + step * i)
  }

  return progression
}
