import { getRandomNumber } from '../utils.js'

const MAX_NUMBER = 100

export const brainPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const brainPrimeRound = () => {
  const number = getRandomNumber(1, MAX_NUMBER)

  const round = {
    question: `${number}`,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  }

  return round
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
