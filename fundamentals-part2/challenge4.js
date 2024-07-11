

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

console.log(bills)

const tips = []

const totals = []

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

for (i = 0; i < bills.length; i++){
    tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(bills[i] +tip)
}

console.log(tips)
console.log(totals)




const calcAverage = function (arr) {
    sum = 0
    for (i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum/arr.length
}

console.log(calcAverage(bills))
console.log(calcAverage(tips))
console.log(calcAverage(totals))
