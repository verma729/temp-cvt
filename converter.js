function convert() {
    const inputTemperature = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
    
    if (isNaN(inputTemperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let result;
    if (fromUnit === "celsius") {
        const fahrenheit = (inputTemperature * 9/5) + 32;
        result = `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (inputTemperature - 32) * 5/9;
        result = `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }

    resultElement.textContent = "Result: " +result;
}