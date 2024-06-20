


import inquirer from "inquirer";
import chalk from "chalk";

do {
    let jump_1 = await inquirer.prompt([{
        name : "splish1",
        message : "How many fishes are there? ",
        type : "list",
        choices: [1, 2, 3]
    }]);
    
      let fish_count = jump_1.splish1
    
      switch (fish_count) {
        case 1:
            console.log(" 🐟 =  🌊");
            break;
        case 2:
            console.log(" 🐟🐟 =  🌊🌊");
            break;
        case 3:
            console.log(" 🐟🐟🐟 =  🌊🌊🌊");
            break;
      
        default:
            break;
      }
} while (true);
    