const repeatString = function (str, num) {
  let repeatedStr = "";
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  if (num < 0) {
    return "ERROR";
  } else {
    return repeatedStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
