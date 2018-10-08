const produceDrivingRange = function(range) {
  return function(a, b) {
    const start = parseInt(a);
    const destination = parseInt(b);
    const distance = Math.abs((start - destination));
    const howClose = Math.abs(distance - range)
    if (range > distance) {
      return `within range by ${howClose}`;
    } else {
      return `${howClose} blocks out of range`;
    }
  }
}

const produceTipCalculator = function(percentage) {
  return function(fare) {
    return fare * percentage
  }
}

const createDriver = function() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
