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
