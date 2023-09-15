// script.js
function calculate1() {
    var Kg = parseFloat(document.getElementById('Kg').value);
    var kgPrice = parseFloat(document.getElementById('kgPrice').value);
    var duty = parseFloat(document.getElementById('duty').value);
    var freight = parseFloat(document.getElementById('freight').value);
    var extExp = parseFloat(document.getElementById('extExp').value);
  
    var totalCost = Kg * kgPrice + duty*kgPrice/100 + freight + extExp;
  
    document.getElementById('result').textContent = totalCost;
  }
  
  function calculate() {
    var widthInches = parseFloat(document.getElementById('widthInches').value);
    var heightMM = parseFloat(document.getElementById('heightMM').value);
    var density = parseFloat(document.getElementById('density').value);
    var length = parseFloat(document.getElementById('length').value);
  
    var widthMeters = widthInches * 0.0254;
    var heightMeters = heightMM / 1000;
  
    var weightPerMeter = widthMeters * heightMeters * density;
    var weightPerMeterInGrams = weightPerMeter * 1000;
    var rollWeight = (weightPerMeterInGrams * length) / 1000;
  
    document.getElementById('output').textContent = weightPerMeterInGrams.toFixed(2) + " Grams";
    document.getElementById('lengthCal').textContent = rollWeight.toFixed(2)  + " Kgs";
  }
  