const fs = require("fs")
const util = require("util")

class Reader{

    constructor(){
        // Função nova com promisse = Função Antiga com Callback
        this.reader = util.promisify(fs.readFile)
    }

    // filepath = caminho do arquivo (.txt .csv)
    async Read(filepath){
        try{
            return await this.reader(filepath,"utf-8")
        }catch(err){
            return undefined
        }
    }
}
module.exports = Reader
