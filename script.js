 function firstChar(text) {
    for (let char of text) {
        if (char !== ' ') {
            return char; // Return the first non-space character immediately
        }
    }
    return ''; // Return an empty string if the text is empty or only contains spaces
}

// Example usage:
const text = prompt("Enter text:");
alert(firstChar(text));
