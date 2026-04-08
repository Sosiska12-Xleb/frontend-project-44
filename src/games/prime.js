import { question } from "../brain-quest.js"

const prime = (name) => {

	console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

	let min = 1              
	let max = 100

	for (let i = 0; i < 3; i += 1) {
		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
		let subAnswer = 'no'
		if (num <= 1) return false;
  
  
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
            return false; 
            }
        }
        return true;

		if (question(randomNum, subAnswer, name) === false) {
			return 
		}
	}

	console.log(`Congratulations, ${name}!`)
}

export { prime }