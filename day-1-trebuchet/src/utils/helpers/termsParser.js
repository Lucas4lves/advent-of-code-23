import { numericWords } from "../wordsDict.js"
import { isNumeric } from "./isNumeric.js"
//TODO: Receber uma lista em vez de dois termos separados! 
export const termsParser = (terms) =>{
	
	if(terms[0] === undefined || terms[1] === undefined)
	{
		return 0;
	}

	if(terms.length  === 1)
	{
		return 0;
	}

	let [a, b] = terms;
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

