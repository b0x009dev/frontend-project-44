import { input } from '../cli.js';
import { getRandomNumber } from '../utils.js';

const MAX_NUMBER = 10;

export const brainCalcRules = () => `What is the result of the expression?`;

const OPERATIONS_COUNT = 3;
const operations = ['+', '-', '*'];

export const brainCalcRound = () => {
  const operation = operations[getRandomNumber(0, OPERATIONS_COUNT - 1)];

  const numberOne = getRandomNumber(0, MAX_NUMBER);
  const numberTwo = getRandomNumber(0, MAX_NUMBER);

  const question = `Question: ${numberOne} ${operation} ${numberTwo}`;

  console.log(question);

  const answer = input('Your answer: ');

  let correctAnswer;

  if (operation === '+') {
    correctAnswer = (+numberOne + +numberTwo).toString();
  }

  if (operation === '-') {
    correctAnswer = (+numberOne - +numberTwo).toString();
  }

  if (operation === '*') {
    correctAnswer = (+numberOne * +numberTwo).toString();
  }

  const isSuccess = answer === correctAnswer;

  if (isSuccess) {
    console.log('Correct!');
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isSuccess;
};
