// it returns the weekly name, monthly name, current date, year & current time. (local place)
const time = new Date();

// it's return number between 0 - 999 that represents that's on local time
const milliSecond = time.getMilliseconds(); // 130 milliseconds

// it's return number between 0 to 59 that represents that's on local time
const second = time.getSeconds(); // 24 second

// it's return number between 0 to 59 that represents that's on local time
const minute = time.getMinutes(); // 13 minute

// it's return number between 0 to 23 that represents that's on local time
const hour = time.getHours(); // 17 hour

// it's return number between 0 to 30 that represents that's on local time
const data = time.getDate(); // 12 tarik

// it's return number between 0 to 6 that represents that's week, but week start (monday to sunday)
const dayWeek = time.getDay(); // 4 weekly day

// it's return number current month between 0 to 11 that represent that's on local time.
const month = time.getMonth(); // 4 months

// it's return year, if you want to current or past
const years = time.getFullYear(); // 2023 year
