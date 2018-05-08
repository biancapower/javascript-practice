// require readline for user input
var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

// ask user whether they want to create a code or crack a code
prompts.question("Do you want to:\n1. crack a code\nOR\n2. create a code (press 1 or 2)", function (choice) {
    // if crack code
    if (choice == 1) {
        // implement crack code logic
        

    // else if create code
    } else if (choice == 2) {
        // implement create code logic

    // else
    } else {
        // invalid input
    }
    process.exit();
});

    

    

    





