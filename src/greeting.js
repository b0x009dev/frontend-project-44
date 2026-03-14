import { input } from './cli.js'

export const greeting = () => {
  console.log('Welcome to the Brain Games!')
  const user_name = input('May I have your name? ')
  console.log(`Hello, ${user_name}!`)
  return user_name
}
