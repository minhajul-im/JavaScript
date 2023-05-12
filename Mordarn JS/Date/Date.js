// return local time
const time = new Date();

// it's return number between 0 - 999 thats represents that's on local time
const milliSecond = time.getMilliseconds();

// it's return number between 0 to 59 that represents that's on local time
const second = time.getSeconds();

// it's return number between 0 to 59 that represents that's on local time
const minute = time.getMinutes();

// it's return number between 0 to 23 that represents that's on local time
const hour = time.getHours();

// it's return number between 0 to 30 that represents that's on local time
const data = time.getDate();

// it's return number between 0 to 6 that represents that's week, but week start (monday)
const dayWeek = time.getDay();

// it's return number current month between 0 to 11 that represent that's on local time.
const month = time.getMonth();

// it's return year, if you want to current or past
const years = time.getFullYear();
