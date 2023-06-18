// if you wanna get elements by class name, use this syntax. You can access, modify, filter & manipulation, & event handling.
const getClassFunc = (classNam) => document.getElementsByClassName(classNam);
//if you wanna "className" modify anything, remember that, the class returns a collection of array-like objects.
let itemsCls = getClassFunc("item");
itemsCls[0].innerHTML = "task-1";
itemsCls[1].style.color = "white";
for (let item of itemsCls) {
  // you can do anything, only get a single element every loop.(item)
}

// query selector method only single element you can anything.
const getQueryFunc = (query) => document.querySelector(query);
const titleId = getQueryFunc("#title");
const titleCls = getQueryFunc(".title");
titleCls.innerHTML = "to-do-list-changed";
titleId.style.backgroundColor = "gray";

// query selector all method return collection of node.you can access, modify, filter & manipulation, & event handling.
const getQueryFuncAll = (query) => document.querySelectorAll(query);

const itemsQuery = getQueryFuncAll(".item"); // <array-like
itemsQuery[2].style.backgroundColor = "lightBlue";
itemsQuery.forEach((item) => {
  // you can do anything, only get single element every looping.
});

// you  can use for html tag access
const getTagFunc = (tag) => document.getElementsByTagName(tag);
const liItem = getTagFunc("li");
liItem[0].innerHTML = "task-1";
liItem[3].style.color = "green";
for (let item of liItem) {
  item.style.fontFamily = "Verdana";
}

// if you wanna get element by id only one element, id specific element.
const getIdFunc = (id) => document.getElementById(id);
const headerTitle = getIdFunc("headerTitle");
headerTitle.style.fontFamily = "verdana";
headerTitle.innerText = "Dom Started New Journey";
