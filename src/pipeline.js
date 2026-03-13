import { greeting } from './greeting.js';
import { gameOver } from './game-over.js';

import { brainEvenRules, brainEvenRound } from './games/brain-even-implementation.js';

const games = {
  'brain-even': {
    gameRules: brainEvenRules,
    gameRound: brainEvenRound,
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
