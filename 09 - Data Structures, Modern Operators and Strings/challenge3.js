'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents'(see below) with a log of the events that happened during the
// game.The values are the events themselves, and the keys are the minutes in which
// each event happened(a football game has 90 minutes plus some extra time).
// Your tasks:



// 1. Create an ARRAY 'events' of the different game events that happened(no
// duplicates)

console.log(gameEvents.values())

const events = [...(new Set(gameEvents.values()))];
console.log(events);


// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair.So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)


console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF]17: ⚽ GOAL



for (const [time, event] of gameEvents.entries()) {


    console.log(`${time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${time} : ${event}`);

}

