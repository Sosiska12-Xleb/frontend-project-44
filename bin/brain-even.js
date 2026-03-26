import readlineSync from 'readline-sync'

import { nameAnswer } from "../src/cli.js"

const evenNumbers = (name) => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".')
	console.log('Question: 15')
	const answer1 = readlineSync.question('Your answer: ')
	if (answer1 === 'no') {
		console.log('Correct!')
	} else {
		console.log(`'${answer1}'`, "is wrong answer ;(. Correct answer was 'no'.")
		console.log(`Let's try again, ${name}!`)
		return
	}

	console.log('Question: 6')
	const answer2 = readlineSync.question('Your answer: ')
	if (answer2 === 'yes') {
		console.log('Correct!')
	} else {
		console.log(`'${answer2}'`, "is wrong answer ;(. Correct answer was 'yes'.")
		console.log(`Let's try again, ${name}!`)
		return
	}

	console.log('Question: 7')
	const answer3 = readlineSync.question('Your answer: ')
	if (answer3 === 'no') {
		console.log('Correct!')
	} else {
		console.log(`'${answer3}'`, "is wrong answer ;(. Correct answer was 'no'.")
		console.log(`Let's try again, ${name}!`)
		return
	}
	console.log(`Congratulations, ${name}!`)
}

evenNumbers(nameAnswer())

export { evenNumbers }
