import { input } from '../cli.js';
import { getRandomNumber } from '../utils.js';

const MAX_NUMBER = 100;

export const brainGCDRules = () => `Find the greatest common divisor of given numbers.`;

export const brainGCDRound = () => {
  const numberOne = getRandomNumber(1, MAX_NUMBER);
  const numberTwo = getRandomNumber(1, MAX_NUMBER);

  const question = `Question: ${numberOne} ${numberTwo}`;

  console.log(question);

  const answer = input('Your answer: ');

  let correctAnswer = getGCD(numberOne, numberTwo).toString();

  const isSuccess = answer === correctAnswer;

  if (isSuccess) {
    console.log('Correct!');
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isSuccess;
};

const getGCD = (numberOne, numberTwo) => {
  let a = numberOne;
  let b = numberTwo;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};
