
function produceDrivingRange(max){
    return function(start,stop){
        start = Number.parseInt(start.slice(0,start.length - 2));

        stop = Number.parseInt(stop.slice(0,stop.length - 2));
        if (Math.abs(start - stop) <= max){
            return `within range by ${Math.abs(start - stop)}`;
        }
        else{
            return `${Math.abs(start - stop) - max} blocks out of range`;
        }
    };
}

function produceTipCalculator(percent){
    return (tip) => tip * percent;
}

function createDriver(){
    let driverID = 0;

    return class Driver{
        constructor(name){
            this.name = name;
            this.id = ++driverID;
        }
    };
}
