const { printTable } = require('console-table-printer');

class TableGenerator{
    constructor(table, params) {
        this.table = table;
        this.params = params;
    }
    _createTableLine(param, tableLine){
        let line = {};
        line[" "] = param;
        this.params.forEach((param, i) => {
            line[param] = tableLine[i];
        })
        return line;
    }
    showTable(){
        let tableLines = [];
        this.params.forEach((param, i)=>{
            tableLines.push(this._createTableLine(param, this.table[i]));
        })
        printTable(tableLines);
    }
}
module.exports = TableGenerator;