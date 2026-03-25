import { input } from './cli.js'
import { greeting } from './greeting.js'
import { gameOver } from './game-over.js'

const gameRounds = 3

export const runGameEngine = (gameData) => {
  const userName = greeting()

  console.log(gameData.rules)

  let isSuccess = true

  for (let i = 0; i < gameRounds; i++) {
    const roundData = gameData.getRoundData()

    console.log(`Question: ${roundData.question}`)

    const answer = input(`Your answer: `)

    const correctAnswer = roundData.correctAnswer

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
