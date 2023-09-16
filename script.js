// script.js
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
  
  function calculate1() {
    var Kg = parseFloat(document.getElementById('Kg').value);
    var kgPrice = parseFloat(document.getElementById('kgPrice').value);
    var freight = parseFloat(document.getElementById('freight').value);
    var extExp = parseFloat(document.getElementById('extExp').value);
    var duty = parseFloat(document.getElementById('custom-duty').value);
    var extDuty = parseFloat(document.getElementById('additional-duty').value);
    var saleTax = parseFloat(document.getElementById('sales-tax').value);
    var additionalSaleTax = parseFloat(document.getElementById('additional-sales-tax').value);
    var incomeTaxRate = parseFloat(document.getElementById('income-tax').value);

    var unitCost = kgPrice + freight + extExp;
    var dutyCalculations = unitCost * (duty + extDuty) / 100;

    var totalCost = unitCost + dutyCalculations;
    
    var salesTax = totalCost * (saleTax + additionalSaleTax) / 100;

    var totalcostinclSalesTax = totalCost + salesTax;

    var incomeTax = totalcostinclSalesTax * incomeTaxRate / 100;

    var totalCost1 = totalcostinclSalesTax + incomeTax;

  
    
  
    document.getElementById('result').textContent = Kg*totalCost1.toFixed(2);
  }