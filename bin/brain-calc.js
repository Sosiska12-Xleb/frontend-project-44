#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const calculator = (name) => {

	console.log('What is the result of the expression?')
	
	if (question('4 + 10', '14', name) === false) {
		return
	}

	if (question('25 - 11', '14', name) === false) {
		return
	}

	if (question('25 * 7', '175', name)  === false) {
		return
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
calculator(name)