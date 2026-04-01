#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const gsd = (name) => {

	console.log('Find the greatest common divisor of given numbers.')
	
	if (question('25 50', '25', name) === false) {
		return
	}

	if (question('100 52', '4', name) === false) {
		return
	}

	if (question('3 9', '3', name)  === false) {
		return
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
gsd(name)