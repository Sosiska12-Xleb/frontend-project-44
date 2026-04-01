#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const progression = (name) => {

	console.log('What number is missing in the progression?')
	
	if (question('5 7 9 11 13 .. 17 19 21 23', '15', name) === false) {
		return
	}

	if (question('2 5 8 .. 14 17 20 23 26 29', '11', name) === false) {
		return
	}

	if (question('14 19 24 29 34 39 44 49 54 ..', '59', name)  === false) {
		return
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
progression(name)