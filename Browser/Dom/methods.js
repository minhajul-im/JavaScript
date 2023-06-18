// some methods use case

const getQuery = (que) => document.querySelector(que);
getQuery("#moreBtn").addEventListener("click", () => {
  let pTag = getQuery("#p-tag");
  pTag.innerHTML = "Hello Document Object Model";
  pTag.style.color = "red";
  pTag.style.fontSize = "20px";
});

// add method use
const items = getQuery(".items");
let li = document.createElement("li");
li.classList.add("item");
li.innerText = "Task Completed";
li.style.color = "blue";

items.appendChild(li);
