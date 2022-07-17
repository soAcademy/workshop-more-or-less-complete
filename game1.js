const readline = require('readline')

console.clear()
console.log('==========================================================================================')
console.log('o                        This game will random number from 0-9                           o')
console.log('o    You will guess the next number is more, less or equal compare to current number     o')
console.log('o                                    Game Started !!                                     o')
console.log('==========================================================================================')

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10)
}

let currentNumber = generateRandomNumber()

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 
const waitForUserInput = () => {
  rl.question(
    `Current number is: ${currentNumber}\nGuess the next number is more, less or equal?\n(type m for more, l for less and e for equal): `,
    (input) => {
      calculate(input)
      waitForUserInput()
  })
}

const calculate = (input) => {
  console.log('\n=============')
  console.log(`Current number is: ${currentNumber}`)
  console.log(`You guess: [${input}]`)

  const nextNumber = generateRandomNumber()
  console.log(`And the next number is: ${nextNumber}`)

  let answer = nextNumber > currentNumber ? 'm' : (nextNumber < currentNumber ? 'l' : 'e')
  
  if (input === answer) {
    console.log('You are correct!')
  } else {
    console.log('You are wrong!')
  }
  currentNumber = nextNumber
  console.log('\n=============')
  console.log('\nNext question')
}

waitForUserInput()
