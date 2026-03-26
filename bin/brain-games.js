#!/usr/bin/env node
import { nameAnswer } from '../src/cli.js'
import { evenNumbers } from '../bin/brain-even.js'

console.log('Welcome to the Brain Games!')
evenNumbers(nameAnswer())