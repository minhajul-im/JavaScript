// this file use just get id, class, & query

// if you wanna get element by id only one element, id specific element.
const getIdFunc = (id) => document.getElementById(id);

// if you wanna get elements by class name
const getClassFunc = (classNam) => document.getElementsByClassName(classNam);

// you can change everything, it's not array, it's array like object but you can traverse.
const itemsByClass = getClassFunc("item");
for (let item of itemsByClass) {
  item.style.color = "white";
  item.style.fontFamily = "fantasy";
  item.style.backgroundColor = "green";
  item.innerText = "hello";
}

// you can do any thing get by query use id, class what every you want.

// this func only one element get.
const getQueryFunc = (query) => document.querySelector(query);
const itemsByQuery = getQueryFunc(".items");

// this func use all & all elements get.
const getQueryFuncAll = (query) => document.querySelectorAll(query);
const itemsByClassName = getQueryFuncAll(".item");

for (const item of itemsByClassName) {
  item.style.color = "red";
  item.innerText = "changed";
}
