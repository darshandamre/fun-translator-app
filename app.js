const input = document.getElementById("input");
const button = document.querySelector(".btn");
const output = document.getElementById("output");

const url = "https://api.funtranslations.com/translate/minion.json";

button.addEventListener("click", () => {
  fetch(url + "?text=" + input.value)
    .then((response) => response.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch((err) => console.log("Error: " + err));
});
