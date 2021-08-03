//Asynchronous programming, the line below waits for line above to excute before it can execute

setTimeout(() => {
  console.log("Reading info from the database");
}, 3000);

console.log("before");

/*
In asynchronous javascript, we have call backs, peomises and async/await functions
*/

//call backs:

const user = getUser(12, (user) => {
  console.log("User", user);
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("connecting to the database");
    callback({ id: id, gitHubUsername: "Tonny" });
  }, 2000);
}

const repos = getRepos("Tonny", (repos) => {
  console.log({ username: repos });
});
function getRepos(username, repoCallback) {
  setTimeout(() => {
    repoCallback({ username: username, repos: ["repo1", "repo2", "repo3"] });
  }, 2000);
}

console.log("after");
