// window open and close
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
let newTab;

// open
openBtn.addEventListener("click", () => {
  newTab = window.open("http://www.minhajul.com/");
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

// window location
const btnWindow = document.getElementById("btn-location");
btnWindow.addEventListener("click", () => {
  document.getElementById(
    "span-tag-location"
  ).innerHTML = `Hostname:- ${window.location.hostname}, Host:- ${window.location.host}, Pathname:- ${window.location.pathname}, Port:- ${window.location.port}, href:- ${window.location.href}, Origin:- ${window.location.origin},`;
});
