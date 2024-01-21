/// call back

const ok = true;
const payment = false;

function choice(callback) {
  console.log("you can choice any book...!");

  setTimeout(function () {
    if (ok) {
      callback();
    } else {
      console.log("you do not like book");
    }
  }, 4000);
}

function process(callback) {
  console.log("your book processing...!");

  setTimeout(function () {
    if (payment) {
      callback();
    } else {
      console.log("Please payment....!");
    }
  }, 5000);
}

function getBook() {
  console.log("your book going on street...");

  setTimeout(function () {
    console.log("your book arrived...");
  }, 3000);
}

choice(function () {
  process(getBook);
});

//when you need many callback functions then what will you do?
choice(function () {
  process(function () {
    getBook(function () {
      function A() {
        function B() {
          function C() {
            function D() {
              function E() {
                function F() {
                  function G() {
                    function H() {
                      function I() {
                        function J() {
                          function K() {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  });
});
/**
 * I think your code will be like this, can you manage this code? impossible!!! that's why this is called (callback hell)
 */
