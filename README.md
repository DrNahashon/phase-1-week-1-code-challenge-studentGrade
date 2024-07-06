# phase-1-week-1-code-challenge-studentGrade
Week 1 Code Challenge Toy Problems - Student Grade

Imported the readline module from Node.js standard library.

Used readline.createInterface to create an instance (rl) for reading from process.stdin (user input) and writing to process.stdout (console)

Used rl.question to prompt the user to enter student marks and handle the response asynchronously in the callback function.

Parsed the input (answer) to a float inside the callback function and determined the grade based on the specified criteria.

Used rl.close() to close the interface once the input is processed
