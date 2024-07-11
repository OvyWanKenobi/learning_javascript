


const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;


// markMass = 95;
// markHeight = 1.88;

// johnMass = 85;
// johnHeight = 1.76;



const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;

console.log(`bmi of mark is ${bmiMark} and bmi of john is ${bmiJohn} `);



const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
} else {
    console.log(` John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}
