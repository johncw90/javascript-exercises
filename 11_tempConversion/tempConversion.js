const convertToCelsius = function (fah) {
  let celsius = (fah - 32) / 1.8;
  let finalNum = Math.round(celsius * 10) / 10;
  return finalNum;
};

const convertToFahrenheit = function (celc) {
  let fahrenheit = celc * (9 / 5) + 32;
  let finalNum = Math.round(fahrenheit * 10) / 10;
  return finalNum;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
