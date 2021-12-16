require("colors");
const InputCheck = require("./InputCheck");
const RulesGenerator = require("./RulesGenerator");
const TableGenerator = require("./TableGenerator");
const GeneratorHMAC = require("./GeneratorHMAC");
const readLineSync = require("readline-sync");


const gameValues = process.argv.slice(2);

if(!InputCheck.checkInputData(gameValues)){
    InputCheck.printExample();
    return;
}

const showMenu = () => {
    gameValues.forEach((el, i)=>{
        console.log(`${i+1}. ${el}`)
    })
    console.log(`0. Exit`)
    console.log(`?. Help`)
}

const playGame = (index, bot) => {
    console.log(`Your move: ${gameValues[index]}`);
    console.log(`Computer move: ${gameValues[bot]}`);
    const result = rulesGenerator.checkWinner(index, bot);
    result === "Draw"? console.log(result): console.log(`You ${result}`);
}

const rulesGenerator = new RulesGenerator(gameValues.length);
rulesGenerator.createRules();
const tableGenerator = new TableGenerator(rulesGenerator.tableRules, gameValues);
while(true){
    const bot = Math.floor(Math.random() * gameValues.length);
    const HMAC = new GeneratorHMAC();
    HMAC.generateHMAC(gameValues[bot]);
    console.log(`HMAC: ${HMAC.HMAC}`.yellow);
    showMenu();
    let index = readLineSync.question('Enter your move: ',
        {limit: ["?", /[0-9]/], limitMessage: 'Use numbers, or "?"'});
    switch (index){
        case "0":
            return;
        case "?":
            tableGenerator.showTable();
            break;
        default:
            if(index < 0 || index > gameValues.length)
                break;
            playGame(index-1, bot)
            console.log(`HMAC key: ${HMAC.key}\n`.yellow);
    }
}
