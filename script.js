// Length Converter
function convertLength() {
  const value = parseFloat(document.getElementById("lengthValue").value);
  const fromUnit = document.getElementById("lengthFrom").value;
  const toUnit = document.getElementById("lengthTo").value;

  const conversionRates = {
    meters: { feet: 3.28084, inches: 39.3701, centimeters: 100, millimeters: 1000, kilometers: 0.001, miles: 0.000621371, yards: 1.09361 },
    feet: { meters: 0.3048, inches: 12, centimeters: 30.48, millimeters: 304.8, kilometers: 0.0003048, miles: 0.000189394, yards: 0.333333 },
    inches: { meters: 0.0254, feet: 0.0833333, centimeters: 2.54, millimeters: 25.4, kilometers: 0.0000254, miles: 0.000015783, yards: 0.0277778 },
    centimeters: { meters: 0.01, feet: 0.0328084, inches: 0.393701, millimeters: 10, kilometers: 0.00001, miles: 0.00000621371, yards: 0.0109361 },
    millimeters: { meters: 0.001, feet: 0.00328084, inches: 0.0393701, centimeters: 0.1, kilometers: 0.000001, miles: 0.000000621371, yards: 0.00109361 },
    kilometers: { meters: 1000, feet: 3280.84, inches: 39370.1, centimeters: 100000, millimeters: 1000000, miles: 0.621371, yards: 1093.61 },
    miles: { meters: 1609.34, feet: 5280, inches: 63360, centimeters: 160934, millimeters: 1609340, kilometers: 1.60934, yards: 1760 },
    yards: { meters: 0.9144, feet: 3, inches: 36, centimeters: 91.44, millimeters: 914.4, kilometers: 0.0009144, miles: 0.000568182 },
  };

  if (fromUnit === toUnit) {
    document.getElementById("lengthResult").innerText = "Please select different units.";
    return;
  }

  const result = value * conversionRates[fromUnit][toUnit];
  document.getElementById("lengthResult").innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Area Converter
function convertArea() {
  const value = parseFloat(document.getElementById("areaValue").value);
  const fromUnit = document.getElementById("areaFrom").value;
  const toUnit = document.getElementById("areaTo").value;

  const conversionRates = {
    squareMeters: { squareFeet: 10.7639, squareInches: 1550, squareCentimeters: 10000, acres: 0.000247105, hectares: 0.0001 },
    squareFeet: { squareMeters: 0.092903, squareInches: 144, squareCentimeters: 929.03, acres: 0.0000229568, hectares: 0.0000092903 },
    squareInches: { squareMeters: 0.00064516, squareFeet: 0.00694444, squareCentimeters: 6.4516, acres: 0.000000159423, hectares: 0.000000064516 },
    squareCentimeters: { squareMeters: 0.0001, squareFeet: 0.00107639, squareInches: 0.155, acres: 0.0000000247105, hectares: 0.00000001 },
    acres: { squareMeters: 4046.86, squareFeet: 43560, squareInches: 6272640, squareCentimeters: 40468600, hectares: 0.404686 },
    hectares: { squareMeters: 10000, squareFeet: 107639, squareInches: 15500000, squareCentimeters: 100000000, acres: 2.47105 },
  };

  if (fromUnit === toUnit) {
    document.getElementById("areaResult").innerText = "Please select different units.";
    return;
  }

  const result = value * conversionRates[fromUnit][toUnit];
  document.getElementById("areaResult").innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Volume Converter
function convertVolume() {
  const value = parseFloat(document.getElementById("volumeValue").value);
  const fromUnit = document.getElementById("volumeFrom").value;
  const toUnit = document.getElementById("volumeTo").value;

  const conversionRates = {
    cubicMeters: { cubicFeet: 35.3147, cubicInches: 61023.7, liters: 1000, gallons: 264.172 },
    cubicFeet: { cubicMeters: 0.0283168, cubicInches: 1728, liters: 28.3168, gallons: 7.48052 },
    cubicInches: { cubicMeters: 0.0000163871, cubicFeet: 0.000578704, liters: 0.0163871, gallons: 0.004329 },
    liters: { cubicMeters: 0.001, cubicFeet: 0.0353147, cubicInches: 61.0237, gallons: 0.264172 },
    gallons: { cubicMeters: 0.00378541, cubicFeet: 0.133681, cubicInches: 231, liters: 3.78541 },
  };

  if (fromUnit === toUnit) {
    document.getElementById("volumeResult").innerText = "Please select different units.";
    return;
  }

  const result = value * conversionRates[fromUnit][toUnit];
  document.getElementById("volumeResult").innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function convertLength() {
    let value = parseFloat(document.getElementById("lengthValue").value);
    let from = document.getElementById("lengthFrom").value;
    let to = document.getElementById("lengthTo").value;
    
    const conversionFactors = {
        meters: { feet: 3.28084, inches: 39.3701, centimeters: 100, millimeters: 1000, kilometers: 0.001, miles: 0.000621371, yards: 1.09361 },
        feet: { meters: 0.3048, inches: 12, centimeters: 30.48, millimeters: 304.8, kilometers: 0.0003048, miles: 0.000189394, yards: 0.333333 }
        // Add other units if needed
    };

    let result = value * (conversionFactors[from]?.[to] || 1);
    document.getElementById("lengthResult").innerText = `Result: ${result} ${to}`;
}

function convertArea() {
    let value = parseFloat(document.getElementById("areaValue").value);
    let from = document.getElementById("areaFrom").value;
    let to = document.getElementById("areaTo").value;

    const conversionFactors = {
        squareMeters: { squareFeet: 10.7639, acres: 0.000247105, hectares: 0.0001 },
        squareFeet: { squareMeters: 0.092903, acres: 0.000022957, hectares: 0.0000092903 }
    };

    let result = value * (conversionFactors[from]?.[to] || 1);
    document.getElementById("areaResult").innerText = `Result: ${result} ${to}`;
}

function estimateMaterial() {
    let material = document.getElementById("materialType").value;
    let area = parseFloat(document.getElementById("areaSize").value);

    const materialEstimates = {
        cement: 0.4, // Bags per sq. meter
        sand: 0.5,   // Cubic feet per sq. meter
        gravel: 0.6, // Cubic feet per sq. meter
        bricks: 50   // Bricks per sq. meter
    };

    let result = area * (materialEstimates[material] || 0);
    document.getElementById("materialResult").innerText = `Estimated ${material}: ${result.toFixed(2)}`;
}

function estimatePaint() {
    const paintArea = parseFloat(document.getElementById("paintArea").value);
    let result = "";
    
    if (isNaN(paintArea) || paintArea <= 0) {
        result = "Please enter a valid wall area.";
    } else {
        const paintRequired = (paintArea / 10).toFixed(2); // Assuming 1 liter covers 10 sq. meters
        result = `Estimated Paint: ${paintRequired} liters`;
    }
    document.getElementById("paintResult").textContent = result;
}

function estimatePaint() {
    const area = parseFloat(document.getElementById("paintArea").value);
    const paintCoverage = 10; // square meters per liter
    const result = area / paintCoverage;
    document.getElementById("paintResult").innerText = `Required: ${result.toFixed(2)} liters of paint`;
  }

  function estimateFlooring() {
    const length = parseFloat(document.getElementById("floorLength").value);
    const width = parseFloat(document.getElementById("floorWidth").value);
    const tileSize = parseFloat(document.getElementById("tileSize").value);
    const area = length * width;
    const result = area / tileSize;
    document.getElementById("flooringResult").innerText = `Required: ${Math.ceil(result)} tiles`;
  }

  function estimateCurtains() {
    const width = parseFloat(document.getElementById("windowWidth").value);
    const height = parseFloat(document.getElementById("windowHeight").value);
    const fabricMultiplier = 2; // Double width for pleats
    const result = width * fabricMultiplier;
    document.getElementById("curtainResult").innerText = `Required: ${result.toFixed(2)} meters of fabric`;
  }

  function estimateLighting() {
    const roomArea = parseFloat(document.getElementById("lightArea").value);
    const lumensPerSquareMeter = 300;
    const totalLumens = roomArea * lumensPerSquareMeter;
    const lumensPerBulb = 800;
    const result = totalLumens / lumensPerBulb;
    document.getElementById("lightingResult").innerText = `Required: ${Math.ceil(result)} bulbs`;
  }


// Function to adjust UI based on screen size
function adjustUI() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    document.querySelectorAll('input, select, button').forEach(el => {
      el.style.fontSize = '14px';
    });
  } else {
    document.querySelectorAll('input, select, button').forEach(el => {
      el.style.fontSize = '16px';
    });
  }
}
// Weight Converter
function convertWeight() {
  const value = parseFloat(document.getElementById("weightValue").value);
  const fromUnit = document.getElementById("weightFrom").value;
  const toUnit = document.getElementById("weightTo").value;

  const conversionRates = {
    kilograms: { pounds: 2.20462, ounces: 35.274, grams: 1000, tons: 0.001 },
    pounds: { kilograms: 0.453592, ounces: 16, grams: 453.592, tons: 0.000453592 },
    ounces: { kilograms: 0.0283495, pounds: 0.0625, grams: 28.3495, tons: 0.0000283495 },
    grams: { kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274, tons: 0.000001 },
    tons: { kilograms: 1000, pounds: 2204.62, ounces: 35274, grams: 1000000 },
  };

  if (fromUnit === toUnit) {
    document.getElementById("weightResult").innerText = "Please select different units.";
    return;
  }

  const result = value * conversionRates[fromUnit][toUnit];
  document.getElementById("weightResult").innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}
