var Reader = require("./Reader")
var Processor = require("./Processor") 
var Table = require("./Table")
var HtmlParser = require("./HtmlParses")
var Writer = require("./Writer")
var PDFWrite = require("./PDFWriter")

var leitor = new Reader
var escritor = new Writer

async function main(){

    var dados = await leitor.Read("./users.csv") // Lê os dados 
    var dadosProcessados = Processor.Process(dados) // Processa os dados retirando quebras de linhas

    var usuarios = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(usuarios)

    escritor.Write("meuHtmlGerado.html",html)
    PDFWrite.WritePDF("meuHtmlGeado.pdf",html)
}   

main()   