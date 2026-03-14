import { getRandomNumber } from '../utils.js'

const MAX_NUMBER = 100

export const brainEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".'

export const brainEvenRound = () => {
  const number = getRandomNumber(0, MAX_NUMBER)

  const round = {
    question: `${number}`,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  }

  return round
}

const isEven = number => number % 2 === 0
