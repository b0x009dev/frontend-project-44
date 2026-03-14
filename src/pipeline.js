import { input } from './cli.js'
import { greeting } from './greeting.js'
import { gameOver } from './game-over.js'

import { brainEvenRules, brainEvenRound } from './games/brain-even-implementation.js'
import { brainCalcRules, brainCalcRound } from './games/brain-calc-implementation.js'
import { brainGCDRules, brainGCDRound } from './games/brain-gcd-implementation.js'
import { brainProgressionRules, brainProgressionRound } from './games/brain-progression-implementation.js'
import { brainPrimeRules, brainPrimeRound } from './games/brain-prime-implementation.js'

const gameRegistry = {
  'brain-even': {
    gameRules: brainEvenRules,
    gameRound: brainEvenRound,
  },
  'brain-calc': {
    gameRules: brainCalcRules,
    gameRound: brainCalcRound,
  },
  'brain-gcd': {
    gameRules: brainGCDRules,
    gameRound: brainGCDRound,
  },
  'brain-progression': {
    gameRules: brainProgressionRules,
    gameRound: brainProgressionRound,
  },
  'brain-prime': {
    gameRules: brainPrimeRules,
    gameRound: brainPrimeRound,
  },
}

const GAME_ROUNDS = 3

export const pipeline = (game) => {
  const userName = greeting()

  console.log(gameRegistry[game].gameRules())

  let isSuccess = true

  for (let i = 0; i < GAME_ROUNDS; i++) {
    const round = gameRegistry[game].gameRound()

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
