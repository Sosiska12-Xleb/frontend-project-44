#!/usr/bin/env node
import { nameAnswer } from "../src/cli.js"
import { question } from "../src/brain-quest.js"

const progressionMaker = () => {
	let progressionArr = []
	let min = 1              
	let max = 100
	let stepMax = 10
	let start = Math.floor(Math.random() * (max - min + 1)) + min
	let step = Math.floor(Math.random() * stepMax)

	for (let i = 0; i < 10; i += 1) {
		let currentElement = start + i * step
		progressionArr.push(currentElement)
	}
	return progressionArr
}

const progression = (name) => {

	console.log('What number is missing in the progression?')

	for (let i = 0; i < 3; i += 1) {
		let progressions = progressionMaker()
		let outNumMax = 10
		let outNum = Math.floor(Math.random() * outNumMax)
		let answer = progressions[outNum]
		progressions[outNum] = '..'
		progressions.join(' ')

		if (question(progressions, `${answer}`, name) === false) {
				return 
		}
	}

	console.log(`Congratulations, ${name}!`)
}

const name = nameAnswer()
progression(name)