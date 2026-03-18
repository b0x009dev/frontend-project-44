import { input } from './cli.js'
import { greeting } from './greeting.js'
import { gameOver } from './game-over.js'

const gameRounds = 3

export const pipeline = (gameRules, gameRound) => {
  const userName = greeting()

  console.log(gameRules())

  let isSuccess = true

  for (let i = 0; i < gameRounds; i++) {
    const round = gameRound()

    console.log(`Question: ${round.question}`)

    const answer = input(`Your answer: `)

    const correctAnswer = round.correctAnswer

    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      isSuccess = false
      break
    }
  }

  gameOver(isSuccess, userName)
}
