// get id function
const getFuncId = (id) => document.getElementById(id);

let newTab; // need for open & close window

// open method work in your open new tab
getFuncId("open-btn").addEventListener("click", () => {
  newTab = window.open("http://www.minhajul.com/");
});

// close method work in your current window close
getFuncId("close-btn").addEventListener("click", () => {
  newTab.close();
});

// screen height method work in your computer height
getFuncId("height-btn").addEventListener("click", () => {
  document.getElementById("height-span").innerHTML = window.innerHeight;
});

// screen width method work in your computer width
getFuncId("width-btn").addEventListener("click", () => {
  document.getElementById("width-span").innerHTML = window.innerWidth;
});

// window location
getFuncId("btn-location").addEventListener("click", () => {
  getFuncId(
    "span-tag-location"
  ).innerHTML = `Hostname:- ${window.location.hostname}, Host:- ${window.location.host}, Pathname:- ${window.location.pathname}, Port:- ${window.location.port}, href:- ${window.location.href}, Origin:- ${window.location.origin},`;
});

// window assign methods open the current window in your link
getFuncId("btnAssign").addEventListener("click", () => {
  window.location.assign("http://www.minhajul.com");
});

// history back & forward
getFuncId("backBtn").addEventListener("click", () => {
  console.log("hello");
});
