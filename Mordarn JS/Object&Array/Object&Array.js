const obj = {
  name: {
    type: "text",
    name: "What is your name?",
    placeholder: "John due",
  },
  email: {
    type: "email",
    name: "What is your email?",
    placeholder: "example@gmail.com",
  },
  phone: {
    type: "phone",
    name: "What is your phone?",
    placeholder: "+88 013934945",
  },
  password: {
    type: "password",
    name: "What is your password?",
    placeholder: "*****",
  },
};

// object to array using reduce
const objToArrReduce = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc.push({ name: cur, ...obj[cur] });

    return acc;
  }, []);
};
console.log(objToArrReduce(obj));

// some key added in object
const addKeyObj = (data) => {
  return Object.keys(data).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };
    return acc;
  }, {});
};
console.log(addKeyObj(obj));
