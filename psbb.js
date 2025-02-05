const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculateBuses = () => {
  rl.question("Input the number of families: ", (n) => {
    const familyMembersInput = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    familyMembersInput.question(
      "Input the number of members in the family (separated by a space): ",
      (familyMembersString) => {
        if (!familyMembersString.includes(" ")) {
          familyMembersString = familyMembersString.split("").join(" ");
        }

        const familyMembers = familyMembersString.split(" ").map(Number);

        if (parseInt(n) !== familyMembers.length) {
          console.log("Input must be equal with count of family");
          rl.close();
          familyMembersInput.close();
          return;
        }

        let buses = 0;

        for (let i = 0; i < familyMembers.length; i++) {
          const members = familyMembers[i];
          if (members > 4) {
            console.log("Input must be equal with count of family");
            rl.close();
            familyMembersInput.close();
            return;
          }
          buses += Math.ceil((members / 4) % 1);
        }

        console.log(`Minimum bus required is: ${buses}`);
        rl.close();
        familyMembersInput.close();
      }
    );
  });
};

calculateBuses();
