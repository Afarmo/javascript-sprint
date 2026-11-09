function calculateFines(JSONarray) {
  let obj = JSON.parse(JSONarray);
  let result = {
    totalFines: 0,
    cars: [],
  };

  for ([undefined, undefined, reg, year, fuel] of obj) {
    let fine = 0;
    if (year < 2000) {
      fine = 20;
      result.totalFines += 20;
    } else if (year < 2015 && fuel === "diesel") {
      result.totalFines += 10;
      fine = 10;
    }
    result.cars.push({ reg: reg, year: year, fuel: fuel, fine: fine });
  }

  return JSON.stringify(result);
}

const carData =
  '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]';
console.log(calculateFines(carData));
