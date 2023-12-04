import { numericWords } from "../wordsDict.js"
import { isNumeric } from "./isNumeric.js"
//TODO: Receber uma lista em vez de dois termos separados! 
export const termsParser = (a, b) =>{
	
	if(a === undefined || b === undefined)
	{
		return 0;
	}

	let terms = [a, b];
	let parsedTerms = [];	
	terms.forEach(t =>{
		if(isNumeric(t))
		{
			parsedTerms.push(t);	
		}else{
			parsedTerms.push(numericWords[`${t}`])
		}
	})

	console.log(`TERMS : ${a} and ${b} => SUM: ${parsedTerms[0] + parsedTerms[1]}`);
	let concatTerms = parsedTerms[0] + parsedTerms[1];
	return parseInt(concatTerms);
}

