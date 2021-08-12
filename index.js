// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
};

const returnLastTwoDrivers = function (drivers) {
    const lastTwoDrivers = drivers.slice(-2)
    return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    const fareMultiplier = function(fare) {
        return fare * integer;
    };
    return fareMultiplier;
};

const fareDoubler = function(fare) {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
};

const fareTripler = function(fare) {
    const tripler = createFareMultiplier(3);
    return tripler(fare);
};

const selectDifferentDrivers = function(drivers, firstOrLastTwo) {
    return firstOrLastTwo(drivers);
};
