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
  let promise = new Promise((response, resolve) => {
    setTimeout(() => {
      if (find) {
        response("you can go now next step");
      } else {
        resolve("I have no choice");
      }
    }, 4000);
  });

  return promise;
}

function buyCourse() {
  console.log("if you choose your course then go to next step");

  let promise = new Promise((response, resolve) => {
    setTimeout(() => {
      if (payment) {
        response("your course ready now you can start");
      } else {
        resolve("I have no money now, i will try later");
      }
    }, 1500);
  });

  return promise;
}

function trackProgress() {
  console.log(
    "check your progress, when complete your course then you will get a certificate"
  );

  let promise = new Promise((response, resolve) => {
    setTimeout(() => {
      if (120 < hours) {
        response("may be you completed your task.");
      } else {
        resolve("you can try again");
      }
    }, 5000);
  });

  return promise;
}

function finishCourse() {
  console.log(
    "you have completed your course, now you can finish your studies"
  );

  let promise = new Promise((response, _resolve) => {
    setTimeout(() => {
      response(" Congress........... you got your certificate");
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
