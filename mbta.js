// Data structures to hold the data needed for the program 
const redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife', ];
const greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore', ];
const orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills', ];
const intersection = 'Park Street';

const subwayMap = {
    Red: redLine,
    Green: greenLine,
    Orange: orangeLine,
    intersection: intersection,
};


// function to calculate number of stops in the same line 
const calculateInPath = function (line, startStaion, endStation) {
    const startStaionIndex = subwayMap[line].indexOf(startStaion);
    const endStationIndex = subwayMap[line].indexOf(endStation);
    const stops = Math.abs(startStaionIndex - endStationIndex);
    return stops;
}

// function to sum stops of two lines. 
const calculateBetweenPaths = function (startLine, startStation, endLine, endStation) {
    const stopsInStartPath = calculateInPath(startLine, startStation, subwayMap.intersection);
    const stopsInEndPath = calculateInPath(endLine, subwayMap.intersection, endStation);
    const totalStops = stopsInStartPath + stopsInEndPath;
    return totalStops;
}

// function that controlls which of the two previous functions to call
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    if (startLine === endLine) {
        return calculateInPath(startLine, startStation, endStation) + ' stops';
    } else {
        return calculateBetweenPaths(startLine, startStation, endLine, endStation) + ' stops';
    }
}

// test calls
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')) // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')) // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) // 6 stops