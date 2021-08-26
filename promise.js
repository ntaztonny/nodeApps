//Promises
/*
  // Holds the eventually result of an asynchronous operation
  and promises a final result of the asynchronous operation
  Promises take one of the 3 states:

  1. Pending: A promise sets off asynchronous operation. 
  If the operation was successful, the promise will be in the rejected state
  


*/

//Creating promises:
// A promise is created by passing a function jwith 2 params having a reso;ve and a reject

const p = new Promise((resolve, reject) => {
  //asyn work eg access to the DB
  //...
  // returns a value or an error
  //the result is sent to the comsumer of the promise:
  resolve(256); // passed the value to teh consumer of a promise
  reject(new Error("Message "));
});

p.then((result) => {
  console.log("Results:", result);
});

//From the callbacks available in th index.js
/*
  function getUser(id, callback) {
  setTimeout(() => {
    console.log("connecting to the database");
    callback({ id: id, gitHubUsername: "Tonny" });
  }, 2000);
}

*/

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("connecting to the database");
      resolve({ id: id, gitHubUsername: "Tonny" });
    });
  });
}
