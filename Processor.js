class Processor{

    static Process(data){
        var a = data.split("\r\n") // Retirando quebras de linha
        var rows = []
        
        a.forEach(row => {
            var arr = row.split(",") // Retirando virgulas
            rows.push(arr) // Adicionando em um array novo
        })
        return rows
    }

}
module.exports = Processor