function produceDrivingRange(blockRange) {
    return function(range1, range2) {
      let newRange1 = Number(range1.slice(0, -2));
      let newRange2 = Number(range2.slice(0, -2));
      let range =  Math.abs(newRange2 - newRange1)
      if (blockRange >= range) {
        return `within range by ${blockRange - range}`
      }
      else {
        return `${range - blockRange} blocks out of range`
      }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(rate) {
    return rate * tipPercentage
  }
}

function createDriver(name) {
  let id = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = id++
    }
  }
}
