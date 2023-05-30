// window open and close
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
let newTab;

// open
openBtn.addEventListener("click", () => {
  newTab = window.open("https://www.google.com/");
});

// close
closeBtn.addEventListener("click", () => {
  window.close(newTab);
});

// window screen height & width
const heightBtn = document.getElementById("height-btn");
const widthBtn = document.getElementById("width-btn");

// screen height
heightBtn.addEventListener("click", () => {
  document.getElementById("height-span").innerHTML = window.innerHeight;
});

// screen width
widthBtn.addEventListener("click", () => {
  document.getElementById("width-span").innerHTML = window.innerWidth;
});
