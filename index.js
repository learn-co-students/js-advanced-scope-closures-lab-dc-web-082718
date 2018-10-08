
function produceDrivingRange(range){
  return function(block1, block2){
    distance = block2.slice(0,2) - block1.slice(0,2);
    if (distance <= range){
      return `within range by ${range- distance}`
    }
    else{
      return `${distance- range} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent){
  return function(bill){
    return bill*tipPercent;
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId
    }
  }
}
const Driver = createDriver();
