// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Input: an array
// output: the input array, minus the first item (0-th index), and the rest of the items shuffled randomly each time the code runs.
// pseudo: Gonna need to lop off the beginning of the array first, then return either a mapped or sorted array with the remaining indexes randomized. ***indexes? indices? *google* oh, both work. English is weird.***

describe("forbiddenSnack", () => {
  it("shows a randomized list of the crayons left after eating the first in the array.", () => {
    expect(forbiddenSnack(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(forbiddenSnack(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
});

// [error 1:   ● Test suite failed to run, Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder.]   ****not even a week away from Javascript and already I forget how to structure these tests ┐(￣ヮ￣)┌ *****
// [error 2: TypeError: expect(...).arrayContaining is not a function]  *****This is gonna take a while, snipping out the rest of me trying various conditions so this error log isnt 30+ iterations deep.*****
//    *****Oh wait nevermind, got it on the next try! RTFM FTW :D *****


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
const forbiddenSnack = (input) => {return input.shift(), input.sort(() => Math.random() - .5);}         // *****apologies for the less-than-reader-friendly one line structure here. wanted to see if I could. Learned a bit more about how returns work in the process!*****

// *****It mostly works as outlined in the Pseudo, went with sorting in the return statement since it seems MUCH more efficient than mapping a new array. I do wonder if shift is more efficient than splice, though. I assume so since the code has to do less 'thinking' with .shift which automatically targets the beginning of the array instead of whatever parameters you define with .splice. *****
// *****Also served as a nice experiment with the sort method. I didn't know you could use sort with Math.random, that's pretty handy!*****
 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// Input: an object containing two numbers
// Output: the two numbers combined.
// Pseudo: Need to subtract the downvotes from the upvotes within the object and return the total.

// a) Create a test with expect statements for each of the variables provided.

describe("rockTheVote", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(rockTheVote(votes1)).toEqual(11)
    expect(rockTheVote(votes2)).toEqual(-31)
  })
});

// [error 1:   ● Test suite failed to run --- ReferenceError: Cannot access 'rockTheVote' before initialization]  ***dangit, I'll get there eventually. forgot to 'stringify' the function name in the test...***
// [error 2: TypeError: rockTheVote(...).toEqual is not a function] ***not a function my butt...misallocated some parantheticals.***

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
const rockTheVote = (input) => {return (input.upVotes - input.downVotes)};  // ***I promise I'll stop.***

// *****this seems too easy not to be a trap, and now I'm paranoid that I missed something... I guess the only tricky part was remembering that we're working with objects so you need to access it in a different manner from an array?*****

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// input: two arrays containing strings
// output: one array with no duplicate values
// Pseudo: Concatinate the two input arrays, filter out the duplicates, and return the new filtered array.

// a) Create a test with an expect statement using the variables provided.
describe("hotGlue", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(hotGlueTwoOhCrapItsEverywhere(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// [error PSYCHE!] WOOO first try!
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
const hotGlue = (inp1, inp2) => {despair = (inp1.concat(inp2)); let hope = new Set(despair); let triumph = Array.from(hope); return triumph;}      // *** I DON'T HAVE A PROBLEM YOU HAVE A PROBLEM I CAN STOP WHENEVER I WANT SHUTUP! ***

// *** Ok since that one's pretty egregious, here's the code in a more legible format. and I'm ACTUALLY done with the one-liners now, pinky-swear ╰(¯▿¯) ***
//  const hotGlue = (inp1, inp2) => {
//   despair = (inp1.concat(inp2))
//       let hope = new Set(despair)
//       let triumph = Array.from(hope)
//       return triumph
//   }

// *****[[WORD WRAP ON THIS ONE'S A MOUTHFUL]] The Set method saved my sanity, here. Hit a wall with getting .filter to work, might need some clarification on how to run it... BUT WHO CARES CAUSE THIS SET METHOD IS WAY COOLER! It's a functionally similar method to .filter (I think...), but narrower in scope. It takes an iterable input(arrays, objects, strings etc.) and returns an object with no duplicated values. ***an example, [let oven = new Set("apple pie")] would return [Set(6) { 'a', 'p', 'l', 'e', ' ', 'i' }] when logged. note the Curly Braces denoting it as an object!*** After that, we just need to turn it back into an array with the conveniently titled [Array.from] method. It feels like there should be a way to do this without needing to declare so many variables, but I'm honestly just gonna take the W for getting this to work at all. 

// OH RIGHT, stretch goal...

const hotGlueTwoOhCrapItsEverywhere = (...inputs) => {
  let artsAndCraftsTime = inputs.flat()
  let painAndConfusion = new Set(artsAndCraftsTime)
  let glueBurns = Array.from(painAndConfusion)
  return glueBurns
} // *****...I'm not great at arts and crafts...*****

// ...and done! another new trick learned, .flat()! It's like super concat! takes any number of different arrays and sticks them end-to-end into one long Mega-array. can also combine subarrays by passing a "depth" argument. Note: seems to combine in the order it recieves, so top to bottom by line when used with our spread operator friend.
//**example: [let whatev = [1, [2, [3, [4]]]]  console.log(whatev.flat(2))] would return [ 1, 2, 3, [ 4 ] ], with most of the array pulled into one, but since we're one 'depth' short, it misses the third subarray.