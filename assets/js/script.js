const conversion = (temperature) => {
  let result = [];
  result[0] = ((9 / 5) * temperature + 32).toFixed(2) + "°F";
  result[1] = ((4 / 5) * temperature).toFixed(2) + "°R";
  result[2] = (temperature + 273).toFixed() + "°K";
  return result;
};

const form = document.getElementById("formConversion");
const resultCelcius = document.querySelector(".results > div:nth-child(1) > span");
const resultFahrenheit = document.querySelector(".results > div:nth-child(2) > span");
const resultReamur = document.querySelector(".results > div:nth-child(3) > span");
const resultKelvin = document.querySelector(".results > div:nth-child(4) > span");

const isEmpty = document.querySelector(".history > div");

if (document.querySelectorAll("td").length === 0) {
  isEmpty.style.display = "block";
} else {
  isEmpty.removeAttribute("style");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target.temperature.value;
  input = Number(input);
  const resultConversion = conversion(input);
  const [fahrenheit, reamur, kelvin] = resultConversion;
  resultCelcius.innerText = input + "°C";
  resultFahrenheit.innerText = fahrenheit;
  resultReamur.innerText = reamur;
  resultKelvin.innerText = kelvin;

  const isEmpty = document.querySelector(".history > div");

  let history = [resultCelcius.innerText, resultFahrenheit.innerText, resultReamur.innerText, resultKelvin.innerText];
  const table = document.querySelector("#tableHistory > tbody");
  const tr = document.createElement("tr");
  history.forEach((item) => {
    const td = document.createElement("td");
    td.innerText = item;
    tr.append(td);
    table.append(tr);
  });
  if (document.querySelectorAll("td").length > 0) {
    isEmpty.removeAttribute("style");
  }
});
