
'use strict';

const jonas = {
    birthYear: 1997,
    firstName: 'Jonas',
    lastName: 'Gae',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2024 - this.birthYear
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${(this.hasDriversLicense) ? 'a' : 'no'} driver's license`;
       
    }


};


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is ${jonas.friends[0]}`)

console.log(jonas.getSummary())