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

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "user";
    div.innerHTML = `
    <h4>${item?.name}</h4>
    <p>${item?.email}</p>
    `;

    getDivSection.appendChild(div);
  });
};
