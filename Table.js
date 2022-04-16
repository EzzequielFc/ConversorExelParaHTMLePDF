class Table{

    constructor(array){
        this.header = array[0] ;
        array.shift() // retira o cabeçalho
        this.rows = array
    }

    get RowCount(){
        return this.rows.length // Quantidade de linhas atuais
    }
    get ColumnCount(){
        return this.header.length // Quantidade de elementos do cabeçalho
    }

}

module.exports = Table