#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const prime = (name) => {

	console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

	let min = 1              
	let max = 100

	for (let i = 0; i < 3; i += 1) {
		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
		let subAnswer = 'no'
		if (randomNum >= 2 && randomNum % 2 !== 0) {
			subAnswer = 'yes'
			if (randomNum % 3 !== 0 && randomNum !== 3) {
				for (let i = 5; i < Math.sqrt(randomNum); i += 2) {
					if (randomNum % i === 0){
						subAnswer = 'no'
					}
				}
			} else {
				subAnswer = 'no'
			}
		}

		if (question(randomNum, subAnswer, name) === false) {
			return 
		}
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
prime(name)