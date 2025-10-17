const input = document.querySelector("#temp");
const inputTemp = document.querySelector("#select");
const convertTemp = document.querySelector("#convert");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
const outputTemp = document.querySelector("#outputTemp");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value.trim() === "") {
    output.innerText = "Enter a valid number!";
    outputTemp.innerText = "";
    return;
  }

  if (inputTemp.value === convertTemp.value) {
    output.innerText = parseFloat(input.value);
    outputTemp.innerText = inputTemp.value;
    return;
  }

  if (inputTemp.value === "°C") {
    convertCelsius();
  } else if (inputTemp.value === "°F") {
    convertFahrenheit();
  } else if (inputTemp.value === "K") {
    convertKelvin();
  } else {
    output.innerText = "Invalid selection!";
  }
});

function convertCelsius() {
  const temp = parseFloat(input.value);
  if (convertTemp.value === "°F") {
    const Fahrenheit = (temp * 9) / 5 + 32;
    output.innerText = Fahrenheit.toFixed(2);
    outputTemp.innerText = "°F";
  } else if (convertTemp.value === "K") {
    const Kelvin = temp + 273.15;
    output.innerText = Kelvin.toFixed(2);
    outputTemp.innerText = "K";
  }
}

function convertFahrenheit() {
  const temp = parseFloat(input.value);
  if (convertTemp.value === "°C") {
    const Celsius = ((temp - 32) * 5) / 9;
    output.innerText = Celsius.toFixed(2);
    outputTemp.innerText = "°C";
  } else if (convertTemp.value === "K") {
    const Kelvin = ((temp - 32) * 5) / 9 + 273.15;
    output.innerText = Kelvin.toFixed(2);
    outputTemp.innerText = "K";
  }
}

function convertKelvin() {
  const temp = parseFloat(input.value);
  if (convertTemp.value === "°C") {
    const Celsius = temp - 273.15;
    output.innerText = Celsius.toFixed(2);
    outputTemp.innerText = "°C";
  } else if (convertTemp.value === "°F") {
    const Fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
    output.innerText = Fahrenheit.toFixed(2);
    outputTemp.innerText = "°F";
  }
}
