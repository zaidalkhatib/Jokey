const userInput = document.getElementById("number-jokes");
document.getElementById("btn").addEventListener("click", () => {
  fetch(`http://api.icndb.com/jokes/random/${userInput.value}`, {
    method: "GET", // or 'PUT'
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      for (let d of data.value) {
        const joke = document.createElement("p");
        joke.textContent = d.joke;
        document.getElementById("message").appendChild(joke);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
