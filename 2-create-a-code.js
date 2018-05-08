// Now do the opposite (starting with a string, create a coded version)

let myString = "Hello, string.";
let answer = [];

for (i = 0; i < myString.length; i++) {
    answer.push(myString.charCodeAt(i));
}


console.log(answer);