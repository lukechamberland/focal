let inputNumber = process.argv[2];

let amount = "";

function rollDice(diceRolled) {
  for(let i = 1; i <= diceRolled; i++) {
    if(i == diceRolled) {
      amount += Math.floor(Math.random() * 6 + 1);
    } else {
      amount += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return amount;
}

console.log("Rolled 3 dice:", rollDice(inputNumber));