const getDateFunc = (date) => {
  let convertStr = date + "";

  const dateArr = convertStr.split("-");

  const year = parseInt(dateArr[0]);

  const month = parseInt(dateArr[1]);

  const day = parseInt(dateArr[2]);

  const dateFunc = new Date(year, month, day);

  const weekName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "ThusDay",
    "Friday",
    "Saturday",
  ];

  const dayName = weekName[dateFunc.getDay()];

  console.log(dayName);

  return dayName;
};

const date = "2002-03-10";
const day = getDateFunc(date);
console.log(day);
