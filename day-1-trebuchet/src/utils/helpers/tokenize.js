import { numericWords } from'../wordsDict.js';
import { isNumeric } from './isNumeric.js';
import { termsParser } from './termsParser.js';

export const tokenize = (line, debug=false) => {

	if(line.length <= 0)
	{
		return 0;
	}
	
	let tkBuffer = "";
	let outputList = [];

	for(let o = 0; o < line.length; o++)
	{
		if(!isNumeric(line[o]))
		{
			tkBuffer += line[o];
		}else{
			outputList.push(line[o]);
			tkBuffer = "";
		}

		if(typeof numericWords[`${tkBuffer}`] === 'number')
		{
			outputList.push(tkBuffer);
			tkBuffer = "";
		}else{
			let keys = Object.keys(numericWords);

			for(let i = 0; i < keys.length; i++)
			{
				if(tkBuffer.includes(keys[i]))
				{
					if(debug)
					{
						console.log(`Such buffer [${tkBuffer}] includes ${keys[i]}`);
					}
					outputList.push(tkBuffer.slice(tkBuffer.length - keys[i].length, tkBuffer.length))
					tkBuffer = "";
				}
			}

		}

	}
	
	if(debug)
	{
		return {
			line,
			outputList,
		};
	}
	console.log(line);
	console.log(outputList);
	return  termsParser(outputList[0],outputList[outputList.length -1]);  
}
