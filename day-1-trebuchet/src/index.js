import { readFileSync } from 'fs'
import { tokenize } from './utils/helpers/tokenize.js';

const input = readFileSync("./input", "utf-8");
const lines = input.split("\n");

let result = lines.map(line =>{
	return tokenize(line, false);
})

let sum = 0;

result.forEach(t => sum += t);


console.log(sum);
