
'use strict'

const question = new Map([

    ['question', 'What is best programming language in world?'],
    [1, 'C'],
    [2, ' Java'],
    [3, 'Javascript'],
    ['answer', 3],
    [true, 'You are correct'],
    [false, 'Try Again']
]);

console.log(question);


// MAP is like Object.entries()

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key} : ${value}`);
    }
};

const answer = Number(prompt('Your Answer'));
console.log(answer);



console.log(question.get(answer === question.get('answer')) );
