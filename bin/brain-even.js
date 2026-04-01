#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const evenNumbers = (name) => {

	console.log('Answer "yes" if the number is even, otherwise answer "no".')

	if (question(15, 'no', name) === false) {
		return
	}

	if (question(6, 'yes', name) === false) {
		return
	}

	if (question(7, 'no', name)  === false) {
		return
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
evenNumbers(name)