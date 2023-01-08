const getDataByApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    showDataDisplayedByApiFunc(data);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

getDataByApi(`https://jsonplaceholder.typicode.com/users`);

const showDataDisplayedByApiFunc = (data) => {
  const getDivSection = document.getElementById("body");
};
