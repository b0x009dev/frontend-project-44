import { input } from './cli.js'

export const greeting = () => {
  console.log('Welcome to the Brain Games!')
  const userName = input('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}
