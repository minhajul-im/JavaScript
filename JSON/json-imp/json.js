const url = "https://jsonplaceholder.typicode.com/posts";

const jsonApi = async (url) => {
  try {
    const res = await fetch(url);

    const data = await res.json();

    display(data);
  } catch (err) {
    console.log(err);
  }
};

jsonApi(url);

const getIdFunc = (url) => document.getElementById(url);

const display = (data) => {
  data.forEach((element) => {
    const main = getIdFunc("main");
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <p>${element?.id}</p>
    <h4>${element?.title}</h4>
    <p>${element?.body}</p>
  </div>`;
    main.appendChild(div);
  });
};
