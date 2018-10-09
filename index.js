const produceDrivingRange = function(blockRange){
  return function(start, end){
    let math = Math.abs(parseInt(start.slice(0,2)) - parseInt(end.slice(0,2)))
    if (math > blockRange)
      {return `${math - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - math}`
    }
  }
}

const produceTipCalculator = function(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name){
      this.name = name
      this.id = driverId++
    }
  }
}
