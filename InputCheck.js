const assert = require("assert");

class InputCheck{
    static _checkDuplicates(gameValues){
        let flag = false;
        const lowerCaseArray = gameValues.map(el=>el.toLowerCase()).sort()
        lowerCaseArray.forEach((el, i) => {
            if(el === lowerCaseArray[i+1])
                flag = true;
        })
        return flag
    }
    static printExample(){
       console.log(`Examples: "Rock Paper Scissors", "A B C D E", "1 2 3 4 5 6 7 8 9"`.red)
    }

    static checkInputData(data) {
        if (data.length < 3) {
            console.error(`Use three or more values`.red);
            return false;
        }
        if (data.length % 2 === 0) {
            console.error(`Use only odd number of values`.red);
            return false;
        }
        if (this._checkDuplicates(data)) {
            console.error(`Don\`t use duplicate values`.red);
            return false;
        }
        return true;
    }
}
module.exports = InputCheck;
