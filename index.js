// ?1
function delayedPromise(value, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(value), delay)
  );
}

const promise1 = delayedPromise(1, 1000);
const promise2 = delayedPromise("lalalal", 2000);
const promise3 = delayedPromise(384, 1500);
const promise4 = delayedPromise("hello world", 3000);
const promise5 = delayedPromise("love promises", 2500);

const promisesArr = [promise1, promise2, promise3, promise4, promise5];

Promise.all(promisesArr)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

// ?2
function randomDelay(value) {
  const delay = Math.random() * (5000 - 1000 + 1000);
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(value), delay)
  );
}

const promisesArr2 = [
  randomDelay(1),
  randomDelay(2),
  randomDelay(3),
  randomDelay(4),
  randomDelay(5),
];

Promise.race(promisesArr2)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
