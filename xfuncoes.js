function retValCalc(pas){ 
    

    var liaux = document.getElementById(pas);   
    var aux =  parseFloat(liaux.getElementsByTagName("input")[0].value);
    produtos.forEach(function(item) {
        if (item.id == pas){
            var auxNumb = item.resultProd + (aux*item.valorVendido);        
            item.resultProd = parseFloat(auxNumb.toFixed(2));
        }   
    
    })

    saveProdutos(produtos);
    var valHist = (aux*produtos[pas].valorVendido)
    valHist = parseFloat(valHist.toFixed(2));
    addHistorico(pas,aux,valHist);
    listaProdutos();
}  ;
 
function criaProdutos(){
    let aRet = [];
    aRet = [{
        nome: 'Torta',
        valorVendido: 6,
        resultProd: 0,   
        id: 0,     
    },
    {
        nome: 'Brigadeiro',
        valorVendido: 4.5,
        resultProd: 0,  
        id: 0,      
    },
    {
        nome: 'Pudim',
        valorVendido: 5,
        resultProd: 0,        
        id: 0, 
    },
    {
        nome: 'Minicake',
        valorVendido: 5,
        resultProd: 0,       
        id: 0,  
    },
    {
        nome: 'Bolo',
        valorVendido: 0.06,
        resultProd: 0.00,
        id: 0,         
    }];
    console.log("Dentro de cria produtos",aRet)
    return aRet
    
};

function addHistorico(pas,aux,valorHist){
    var data = new Date();
    let Hitorico = JSON.parse(localStorage.getItem('historico')) || [];
    console.log("valorHist",valorHist)
    Hitorico.push({
        Nome: produtos[pas].nome, 
        hora: `${String(data.getHours())}:${String(data.getMinutes())}:${String(data.getSeconds())} `, 
        valorCompra: aux,       
        result: valorHist
    })
    saveHistorico(Hitorico)
return 
}

function saveProdutos(produtos){
    console.log("saveProdutos",produtos);
    localStorage.setItem('produtos',JSON.stringify(produtos));
 }
 
function saveHistorico(historico){
    localStorage.setItem('historico',JSON.stringify(historico));
 }
 function savePosic(posic){
    localStorage.setItem('posic',JSON.stringify(posic));
 }



