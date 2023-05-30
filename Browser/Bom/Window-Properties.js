// window open and close
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
let windows;

// open
openBtn.addEventListener("click", () => {
  windows = window.open("https://www.google.com/");
});

// close
closeBtn.addEventListener("click", () => {
  window.close(windows);
});
