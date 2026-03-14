import { greeting } from './greeting.js';
import { gameOver } from './game-over.js';

import { brainEvenRules, brainEvenRound } from './games/brain-even-implementation.js';
import { brainCalcRules, brainCalcRound } from './games/brain-calc-implementation.js';
import { brainGCDRules, brainGCDRound } from './games/brain-gcd-implementation.js';
import { brainProgressionRules, brainProgressionRound } from './games/brain-progression-implementation.js';
import { brainPrimeRules, brainPrimeRound } from './games/brain-prime-implementation.js';

const games = {
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
};

const GAME_ROUNDS = 3;

export const pipeline = (game) => {
  const userName = greeting();

  console.log(games[game].gameRules());

  let isSuccess = true;

  for (let i = 0; i < GAME_ROUNDS; i++) {
    if (!games[game].gameRound()) {
      isSuccess = false;
      break;
    };
  }

  gameOver(isSuccess, userName);
};
