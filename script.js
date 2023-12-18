 function firstChar(text) {
	 let ans;
    for (let char of text) {
		ans = char;
		break;
	}
            return ans;
}

// Do not change the code belo

const text = prompt("Enter text:");
alert(firstChar(text));
