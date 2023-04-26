// Unit Converter
// A local weather station needs to convert temperature data collected in celsius to fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit. This function will help the weather station to provide temprature readings that are easily understandable to a wider audience. 


function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit
}


const temperatureCelsius = 20;
const tempratureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(tempratureFahrenheit);