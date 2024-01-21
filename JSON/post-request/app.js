const getId = (id) => document.getElementById(id).value;

const postData = async () => {
  // this url post my all input data
  const url = "https://jsonplaceholder.typicode.com/posts";

  // get input data
  const name = getId("name");
  const email = getId("email");
  const password = getId("password");
  const confirmPassword = getId("confirm-password");

  // make an object
  const data = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  const post = {
    method: "Post",

    headers: {
      "content-type": "application/json;charset = UTF-8",
    },

    body: JSON.stringify(data),
  };

  const sendRequest = await fetch(url, post);

  const response = await sendRequest.json();

  return response;
};

const post = async () => {
  const data = await postData();
  console.log(data);
};

// when hit this submit button then get all input data
document.getElementById("submit").addEventListener("click", post);
