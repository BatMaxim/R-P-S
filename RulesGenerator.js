class RulesGenerator{
    constructor(number) {
        this.numberValues = number;
    }

    _getSequence(number, value){
        let sequence = [];
        for (let i = 0; i < number; i++)
            sequence.push(value);
        return sequence;
    }

    _getFirstRuleLine(){
        let numWL = (this.numberValues-1)/2;
        return ["Draw", ...this._getSequence(numWL, "Win"), ...this._getSequence(numWL, "Lose")]
    }
    checkWinner(player, bot){
        return this.tableRules[player][bot]
    }
    createRules(){
        let rules = [this._getFirstRuleLine()];
        for (let i = 1; i < this.numberValues; i++)
        {
            const newLine = [...rules[i-1].slice(-1), ...rules[i-1].slice(0, -1)];
            rules.push(newLine)
        }
        this.tableRules = rules;
    }
}

module.exports = RulesGenerator;