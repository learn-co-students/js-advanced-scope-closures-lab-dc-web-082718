function produceDrivingRange(range) {
  return (startBlock, endBlock) => {
    let diff = Math.abs(parseInt(startBlock, 10) - parseInt(endBlock, 10))
    if (diff <= range) {
      return `within range by ${range - diff}`
    } else {
      return `${diff - range} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return (tip) => {
    return Math.floor(percentage * tip)
  }
}

function createDriver() {
  let driverId = 0
return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
