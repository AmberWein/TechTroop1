// ex1- write a function pushPull that takes a function as an argument and invokes it
const pushPull = function(callback) {
  callback();
}

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

pushPull(push) // prints "pushing it!"
pushPull(pull) // prints "pulling it!"


// ex2- create a function getTime that takes a function as a parameter and calls it with the current time

const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function(callback) {
  const time = new Date();
  callback(time);
}

getTime(returnTime)

// ex3- complete a missing function to avoid a ReferenceError

// set logData
const logData = function(data) {
  console.log(data);
};

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party")