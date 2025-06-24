// // 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })


function getUserFromAPI(username) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          reject("User not found");
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}


// Usage:
getUserFromAPI("dhuruv-successiveTech")
  .then((data) => {
    console.log(data); // Display user data
  })
  .catch((error) => {
    console.log(error); // Handle errors
  });
