import { getRandomNumber } from '../utils.js'

const MAX_NUMBER = 100

export const brainGCDRules = () => 'Find the greatest common divisor of given numbers.'

export const brainGCDRound = () => {
  const numberOne = getRandomNumber(1, MAX_NUMBER)
  const numberTwo = getRandomNumber(1, MAX_NUMBER)

  const round = {
    question: `${numberOne} ${numberTwo}`,
    correctAnswer: `${getGCD(numberOne, numberTwo)}`,
  }

  return round
}

const getGCD = (numberOne, numberTwo) => {
  let a = numberOne
  let b = numberTwo

  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}
