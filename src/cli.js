import readlineSync from 'readline-sync'

const nameAnswer = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log('Hello,', name)
    return name
}

export { nameAnswer }