// How does work asynchronous?

/**
 *You think I will buy a course. then what do you do? You will go to any website & choose the course. When you will click buy now, open the payment option then you will payment. Now you can start your course. Check your progress,  when complete your course then you will get a certificate.
 */

const find = true;
const payment = true;
const hours = 150;

function findCourse() {
  console.log(
    "you think i will buy a course,then what do you do? find your course"
  );
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (find) {
        resolve("you can go now next step");
      } else {
        reject("I have no choice");
      }
    }, 4000);
  });

  return promise;
}

function buyCourse() {
  console.log("if you choose your course then go to next step");

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve("your course ready now you can start");
      } else {
        reject("I have no money now, i will try later");
      }
    }, 1500);
  });

  return promise;
}

function trackProgress() {
  console.log(
    "check your progress, when complete your course then you will get a certificate"
  );

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (120 < hours) {
        resolve("may be you completed your task.");
      } else {
        reject("you can try again");
      }
    }, 5000);
  });

  return promise;
}

function finishCourse() {
  console.log(
    "you have completed your course, now you can finish your studies"
  );

  let promise = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(" Congress........... you got your certificate");
    }, 100);
  });

  return promise;
}

async function course() {
  try {
    await findCourse();
    await buyCourse();
    await trackProgress();
    const result = await finishCourse();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
course();
