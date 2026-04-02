#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const evenNumbers = (name) => {

	console.log('Answer "yes" if the number is even, otherwise answer "no".')

	let min = 1              
	let max = 100

	for (let i = 0; i < 3; i += 1) {

		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

		if (randomNum % 2 === 0) {
			if (question(randomNum, 'yes', name) === false) {
				return 
			}
		} else {
			if (question(randomNum, 'no', name) === false) {
				return 
			}
		}
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
evenNumbers(name)