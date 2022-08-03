// Code your solution here

// ********** Bobby
// Bobby
// ********** Sammy
// Bobby
// ********** Sally
// Bobby
// console.log("**********", name)
// console.log(string)

// findMatching- This function takes an array of drivers' names and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.

// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match

function findMatching (array, string) {
    return array.filter(name => {
        if (name.toLowerCase() === string.toLowerCase()) {
            return name
        } 
    })
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments 
// for querying the array, and returns all drivers whose names begin with the provided letters.

// 4) returns a driver if beginning provided letters match
// AssertionError: expected [] to have the same members as [ 'Sammy', 'Sarah', 'Sally' ]


function fuzzyMatch(array, string) {
  return array.filter(name => {
    console.log(string)
    if (name.startsWith(string) === true )
    // if (name == string.startsWith("Sa"))

    return name
  })
}


// matchName - This function takes an array of driver objects and a string as arguments. 
// Each driver object has two properties: name and hometown. The function should return each 
// element whose name property matches the provided string argument.

// 7) accesses the data structure to check if name matches

function matchName (array, string) {
    array.filter(name => {
      console.log(name.name)
      if (name.name === string)
      return name
    })

}
