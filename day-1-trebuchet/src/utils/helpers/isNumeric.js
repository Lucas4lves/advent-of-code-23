export const isNumeric = (c) =>{

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
