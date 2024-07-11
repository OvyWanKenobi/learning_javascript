

const dolphinsAvg = (96 + 125 + 89) / 3
const koalasAvg = (92 + 108 + 110) / 3

console.log(dolphinsAvg, koalasAvg)


if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('dolphone is winner')

} else if (dolphinsAvg < koalasAvg && koalasAvg >=100 ) {
    console.log('koalas is winner')

} else if(dolphinsAvg === koalasAvg && dolphinsAvg>=100 && koalasAvg >= 100){
    console.log('both gets trophy')

} else {
    console.log('no one gets trophy')
}