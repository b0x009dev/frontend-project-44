import { input } from '../cli.js'
import { getRandomNumber } from '../utils.js'

const MAX_NUMBER = 100

export const brainPrimeRules = () => `Answer "yes" if given number is prime. Otherwise answer "no".`

export const brainPrimeRound = () => {
  const number = getRandomNumber(1, MAX_NUMBER)

  const question = `Question: ${number}`

  console.log(question)

  const answer = input('Your answer: ')

  let correctAnswer = isPrime(number) ? 'yes' : 'no'

  const isSuccess = answer === correctAnswer

  if (isSuccess) {
    console.log('Correct!')
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
  }

  return isSuccess
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
