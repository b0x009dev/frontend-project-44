import { input } from './cli.js'
import { getGame } from './game-registry.js'
import { greeting } from './greeting.js'
import { gameOver } from './game-over.js'

const GAME_ROUNDS = 3

export const pipeline = (gameName) => {
  const userName = greeting()

  const game = getGame(gameName)

  console.log(game.gameRules())

  let isSuccess = true

  for (let i = 0; i < GAME_ROUNDS; i++) {
    const round = game.gameRound()

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
