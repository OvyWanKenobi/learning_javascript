
// task 1

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;


// markMass = 95;
// markHeight = 1.88;

// johnMass = 85;
// johnHeight = 1.76;

// task2

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;

console.log(`bmi of mark is ${bmiMark} and bmi of john is ${bmiJohn} `);
    

// task3

const markHigherBMI = bmiMark > bmiJohn;

console.log(` markHigherBMI = ${markHigherBMI}`);