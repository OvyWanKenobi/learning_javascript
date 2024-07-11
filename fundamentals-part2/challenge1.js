


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(44, 23, 71))

const avgDolphins = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(65, 54, 49)

console.log(avgDolphins)
console.log(avgKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if( avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('no team wins')
    }
} 

checkWinner(avgDolphins,avgKoalas) 