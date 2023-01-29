/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

const { workerData } = require("worker_threads");

// Write our function (we must define it too!) below

const joinList = function(qty) {
  let sumString = "";
  for (let i = 0; i < qty.length; i++) {
    const finalString = qty[i];
    console.log(i, qty.length);
    if (i < qty.length - 1) {
      sumString += finalString.toString() + ", ";
    } else {
      sumString += finalString.toString() + "";
    }
  }
  return sumString
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);