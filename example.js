// Curly braces represent a object
// Brackets represent an array

// Arrays are collections that can hold values of various data types,
// including other arrays and values linked to variables like exampleIndex2 and exampleIndex3.
// let exampleArray = ['exampleIndex1', [exampleIndex2, exampleArray], exampleIndex3, 4];

let [exampleIndex2, exampleArray, exampleIndex3] = [1, 2, 3]
let exampleObject = {
  // Each key is associated with a specific value, which can be of any data type.
  exampleKey1: 'exampleIndex1', // key-value pair with a string value
  exampleKey2: [exampleIndex2, exampleArray], // key-value pair with an array value
  exampleKey3: exampleIndex3, // key-value pair with a value linked to exampleIndex3
  exampleKey4: 4, // key-value pair with a numeric value
  exampleKey5: {
    key1: 1,
    key2: 2,
  },
}
let objectValuesArray = Object.values(exampleObject)
console.log(exampleArrayy)
// v v v OUTPUT v v v
// [ 'exampleIndex1', [ 1, 2 ], 3, 4, { key1: 1, key2: 2 } ]

function exampleFunction(hungry) {
  if (hungry === true) {
    console.log('we are opening the fridge')
  } else {
    console.log('we will have some water')
  }
}
// doesn't activate hungry comparison: drink water
exampleFunction((hungry = false))
// activates the hungry comparison: open fridge
exampleFunction((hungry = true))

function defrostCycle() {
  // Check if all conditions are met for defrost cycle
  if (
    defrostThermo == 'cold' &&
    thermoStat == 'warm' &&
    defrostTimer == 'cycle'
  ) {
    // Activate defrost heaters when conditions are met
    activateDefrostHeaters()
  }
}

