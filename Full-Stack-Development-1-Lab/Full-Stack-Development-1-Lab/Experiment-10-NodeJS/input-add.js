const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter the first number: ", firstText => {
  rl.question("Enter the second number: ", secondText => {
    const first = Number(firstText);
    const second = Number(secondText);
    if (firstText.trim() === "" || secondText.trim() === "" ||
        !Number.isFinite(first) || !Number.isFinite(second)) {
      console.log("Please enter valid numbers.");
    } else {
      console.log("Sum =", first + second);
    }
    rl.close();
  });
});
