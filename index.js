/*Task 01:

Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs. */
async function iterateWithAsyncAwait() {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}
const values = [1, 2, 3, 4, 5, 6];
iterateWithAsyncAwait(values);

/* Task 02:

Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.*/
async function awaitCall() {
  const data = await fetch("https://api.github.com/users/github");
  const json = await data.json();
  console.log(json);
}

/*Task 03:

Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message. */
async function awaitCall() {
  try {
    const data = await fetch("https://api.github.com/users/github");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des données: ",
      error
    );
  }
}

/*Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await. */

/*Task 04:

Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved. */
async function concurrentRequests() {
  const [result1, result2] = await Promise.all([
    makeAPICall1(),
    makeAPICall2(),
  ]);
  console.log("Combined results:", result1, result2);
}
/*Task 05:

Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete. */
async function parallelCalls(urls) {
  const response = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(response.map((res) => res.json()));

  console.log(data);
}
