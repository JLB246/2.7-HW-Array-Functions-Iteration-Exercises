/** 2. ARRAY METHODS **/

// IMPORTANT: These exercises are cumulative, so make sure you
// to run your code and verify it's working before moving to the
// next exercise.

// Complete the following, starting from the following array: 
var arr = ["JavaScript", "Python", "Ruby", "Java"];

console.log(arr.slice(1,3))
var arrSliced = arr.slice(1,3)

console.log(arrSliced.concat('Haskell','Clojure'))



// Use the slice function to convert arr into the following: 
// ["Python", "Ruby"].

// Verify that arr now contains ["Python", "Ruby"] by logging it

// Use the concat function to combine arr with ["Haskell", "Clojure"], 
// so arr will become: ["Python", "Ruby", "Haskell", "Clojure"]

// Use the join function on your array to log the string:
// "Python, Ruby, Haskell, Clojure"


/** ARRAY ITERATION **/

// For each of the exercises below, assume you are starting with the
// following people array.
var people = ["Greg", "Mary", "Devon", "James"];

for (var i = 0; i < people.length; i=i+1){
  console.log(people[i]);

}

const index = people.indexOf('Greg');
if (index > -1) { people.splice(index, 1) }
console.log(people);

people.pop('James')
console.log(people)

console.log(people.unshift('Matt'))

people.push('Josh')
console.log(people)


for (var i = 0; i < people.length; i=i+1) {
  console.log(people[i]);
  
  if (i === 1){
    break;
  }

}

people.indexOf('Mary');

people.indexOf('Foo');

people[0]='Greg'
people[3]='James'
console.log(people)

people.splice(2,1,"Elizabeth","Artie")
console.log(people)


// Using a loop, iterate through this array and console.log all of the people.

// Write the command to remove "Greg" from the array.

// Write the command to remove "James" from the array.

// Write the command to add "Matt" to the front of the array.

// Write the command to add your name to the end of the array.

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

// Write the command that gives the indexOf where "Mary" is located.

// Write the command that gives the indexOf where "Foo" is located (this should return -1).

// Re-assign the people variable to the original value of: 
// ["Greg", "Mary", "Devon", "James"];

// Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
// Your array should look like this when you are done:
// ["Greg", "Mary", "Elizabeth", "Artie", "James"].
