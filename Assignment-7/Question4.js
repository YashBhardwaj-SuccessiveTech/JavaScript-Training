//4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

function createTask(id) {
  return () =>
    new Promise((resolve) => {
      console.log("start", id);
      setTimeout(() => {
        console.log("End", id);
        resolve(id);
      }, 2000);
    });
}

const taskList = [
  createTask(1),
  createTask(2),
  createTask(3),
  createTask(4),
  createTask(5),
  createTask(6),
  createTask(7),
  createTask(8),
  createTask(9),
  createTask(10),
];

async function runTasks(tasks, limit) {
  let result = [];

  for (let i = 0; i < tasks.length; i += limit) {
    let batch = tasks.slice(i, i + limit);
    let promises = batch.map((fn) => fn());
    let res = await Promise.all(promises);
    result.push(...res);
  }

  return result;
}

runTasks(taskList, 3).then((res) => {
  console.log("All done:", res);
});