import { input } from '../cli.js';

const MAX_NUMBER = 100;

export const brainEvenRules = () => `Answer 'yes' if number even otherwise answer 'no'.`;

export const brainEvenRound = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER + 1));

  const question = `Question: ${number}`;

  console.log(question);

  const answer = input('Your answer: ');

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  const isSuccess = answer === correctAnswer;

  if (isSuccess) {
    console.log('Correct!');
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isSuccess;
};

const isEven = number => number % 2 === 0;
