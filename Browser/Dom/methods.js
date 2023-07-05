// some methods use case

const getQuery = (que) => document.querySelector(que);

const getQueryAll = (que) => document.querySelectorAll(que);

// click event
getQuery("#moreBtn").addEventListener("click", () => {
  let pTag = getQuery("#p-tag");
  pTag.innerHTML = "Hello Document Object Model";
  pTag.style.color = "red";
  pTag.style.fontSize = "20px";
});

// add method use
const ulItems = getQuery(".items");
let li = document.createElement("li");
li.classList.add("item");
li.innerText = "Task Completed";
li.style.color = "blue";

ulItems.appendChild(li);

// remove method use
ulItems.removeChild(ulItems.children[2]);

// you can get children from the parent.
let getItem = ulItems.children[1];

// you can use replace method its work class name with css
const headerTitle = getQuery(".headerTitle").classList;
headerTitle.replace("headerTitle", "new-header-title");

// node list get all li element in the name of 'item'.
const nodeList = getQueryAll("li.item");
nodeList[2].style.backgroundColor = "green";
nodeList[0].innerText = "hello-item";

// node list object like array

//get length
const length = nodeList.length;

for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "yellow";
  nodeList[i].innerText = "hello";
}
