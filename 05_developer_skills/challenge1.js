

// const temps = [17, 21, 23]
const temps = [12, 5, -5, 0, 4]


const printForecast = function (temps) {
    let forcast = '... '
    
    for (i = 0; i < temps.length; i++){
        forcast += `${temps[i]}*C in ${i+1} days ... `
    }

    return forcast

}


console.log(printForecast(temps))