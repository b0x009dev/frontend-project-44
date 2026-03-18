import { getRandomNumber } from '../utils.js'

const maxNumber = 100

export const brainGcdRules = () => 'Find the greatest common divisor of given numbers.'

export const brainGcdRound = () => {
  const numberOne = getRandomNumber(1, maxNumber)
  const numberTwo = getRandomNumber(1, maxNumber)

  const round = {
    question: `${numberOne} ${numberTwo}`,
    correctAnswer: `${getGcd(numberOne, numberTwo)}`,
  }

  return round
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
