function calculateFines(JSONarray) {
  let obj = JSON.parse(JSONarray);
  let result = {
    totalFines: 0,
    cars: [],
  };

  for ([_, _, reg, year, fuel] in obj) {
    let fine = 0;
    if (year < 2000) {
      fine = 20;
      result.totalFines += 20;
    } else if (year < 2015 && fuel === "diesel") {
      result.totalFines += 10;
      fine = 10;
    }
    cars.push({ reg: reg, year: year, fuel: fuel, fine: fine });
  }
  return JSON.stringify(result);
}
