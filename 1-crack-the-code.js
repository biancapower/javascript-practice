// Crack the following code:
// [77,97,103,105,99,32,97,110,100,32,109,97,121,104,101,109,33]

let code = [77,97,103,105,99,32,97,110,100,32,109,97,121,104,101,109,33];

let answer = "";

for (i = 0; i < code.length; i++) {
    answer = answer.concat(String.fromCharCode(String(code[i])));
}

console.log(answer);