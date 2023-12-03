const input = require('node:fs').readFileSync("./input", "utf-8");
const lines = input.split("\n");

const numericWords = {
	"one": 1,
	"two": 2,
	"three": 3,
	"four": 4,
	"five": 5,
	"six": 6,
	"seven": 7,
	"eight": 8,
	"nine": 9,
}

const isNumeric = (c) =>{

	if(typeof c === 'number')
	{
		return true;
	}

	let charCode = c.charCodeAt(0);
	if(charCode >= 48 && charCode <=57)
	{
		return true;
	}

	return false;
}

const tokenize = (line, debug=false) => {

	if(line.length <= 0)
	{
		return 0;
	}
	
	let tkBuffer = "";
	let tokenList = [];
	let numbersList = [];

	for(let o = 0; o < line.length; o++)
	{
		if(!isNumeric(line[o]))
		{
			tkBuffer += line[o];
		}else{
			numbersList.push(line[o]);
			tkBuffer = "";
		}

		if(typeof numericWords[`${tkBuffer}`] === 'number')
		{
			tokenList.push(tkBuffer);
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
					tokenList.push(tkBuffer.slice(tkBuffer.length - keys[i].length, tkBuffer.length))
					tkBuffer = "";
				}
			}

		}

	}

	return {
		line,
		tokenList,
		numbersList
	};
}

//let result = tokenize(lines[0]);
/*
	*
let result = lines.map(line =>{
	return tokenize(line);
})
	* */
let result = [];

for(let p = 0; p < 10; p++)
{
	result.push(tokenize(lines[p], true));
}

console.log(result);
