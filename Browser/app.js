const getId = (id) => {
  const inputId = document.getElementById(id);
  const inputValue = inputId.value;
  inputId.value = "";
  return inputValue;
};

const setProduct = () => {
  const product = getId("product");
  const quantity = getId("quantity");
  getStorage(product, quantity);
};

const getLocalStorage = () => {
  let getProduct = localStorage.getItem("product");
  let product = {};
  if (getProduct) product = JSON.parse(getProduct);
  return product;
};

const getStorage = (product, quantity) => {
  const getProduct = getLocalStorage();
  getProduct[product] = quantity;
  const stringify = JSON.stringify(getProduct);
  localStorage.setItem("product", stringify);
};
