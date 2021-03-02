// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

function century(year) {
  if (year % 100 === 0) {
    return parseInt(year / 100);
  }

  return (String(year).length === 2) ? 1 : parseInt(year / 100) + 1;

  // return Math.ceil(year/100);  // я не знал про ceil...
}

console.log(century(734187)) // 7342
console.log(century(19000)) // 190
console.log(century(1601)) // 17
console.log(century(941649)) // 9417
console.log(century(89)) // 1