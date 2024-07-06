// studentGrade.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGrade() {
    rl.question("Enter student marks (0-100): ", (answer) => {
        let marks = parseFloat(answer);

        if (marks > 79) {
            console.log('A');
        } else if (marks >= 60) {
            console.log('B');
        } else if (marks >= 50) {
            console.log('C');
        } else if (marks >= 40) {
            console.log('D');
        } else {
            console.log('E');
        }

        rl.close();
    });
}

studentGrade();