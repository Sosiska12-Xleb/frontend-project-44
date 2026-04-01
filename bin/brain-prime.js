#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const prime = (name) => {

	console.log('What number is missing in the progression?')
	
	if (question('7', 'yes', name) === false) {
		return
	}

	if (question('284', 'no', name) === false) {
		return
	}

	if (question('151', 'yes', name)  === false) {
		return
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
prime(name)