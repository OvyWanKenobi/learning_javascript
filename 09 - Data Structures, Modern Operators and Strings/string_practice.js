'use strict'

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


//TRANSFORM THE UPPER STRING TO BELOW FORMATED STRING :
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


const newtext = flights.split('+');
console.log(newtext);

for (let item of newtext) {

    item = item.split(';');
    item[0] = item[0].replace(/_/g, ' ').trim();
    item[1] = item[1].slice(0, 3).toUpperCase();
    item[2] = item[2].slice(0, 3).toUpperCase();
    item[3] = item[3].replace(':', 'h');
    const finalText = `${(item[0].startsWith("Delayed")) ? "🔴" : ""} ${item[0]} from ${item[1]} to ${item[2]} (${item[3]})`;
    console.log(finalText.padStart(50, " "));
}