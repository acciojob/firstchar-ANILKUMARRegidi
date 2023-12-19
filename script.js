 function firstChar(text) {
    let ans = '';
    let res = false;

    for (let char of text) {
        ans = char;
        res = true;
        break;
    }

    if (res) {
        return ans;
    }

    return '';
}

// Do not change the code below.
const text = prompt("Enter text:");
alert(firstChar(text));
