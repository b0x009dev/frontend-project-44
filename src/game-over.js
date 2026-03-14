export const gameOver = (isSuccess, userName) => {
  if (isSuccess) {
    console.log(`Congratulations, ${userName}!`)
  }
  else {
    console.log(`Let's try again, ${userName}!`)
  }
}
