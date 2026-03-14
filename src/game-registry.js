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

export const getGame = (gameName) => {
  const game = gameRegistry[gameName]

  if (!game) {
    throw new Error(`Unknown game: ${gameName}`)
  }

  return game
}
