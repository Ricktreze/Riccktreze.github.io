function retValCalc(pas){ 
    

    var liaux = document.getElementById(pas);   
    var aux =  parseFloat(liaux.getElementsByTagName("input")[0].value);
    if(aux > 0 && pas == 5){   
        totalOk();
        saveProdutos(produtos);
        listaProdutos();
    }
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
    localStorage.setItem('produtos',JSON.stringify(produtos));
 }
 
function saveHistorico(historico){
    localStorage.setItem('historico',JSON.stringify(historico));
 }
 function savePosic(posic){
    localStorage.setItem('posic',JSON.stringify(posic));
 }

 function somaHist(ident){
    if (PermiteNumeros( document.getElementsByTagName('input')[ident].value,ident)){
     document.getElementsByTagName('input')[ident].value++;
    }
  
 }

 function subtraiHist(ident){
     if (PermiteNumeros( document.getElementsByTagName('input')[ident].value,ident)){
        document.getElementsByTagName('input')[ident].value--;
     }

 }


 function totalOk(){
    let valorInpu = 0;
    let nInput = 0;
    let aux =0;

    for (nInput in produtos){ 
      aux = parseInt(document.getElementsByTagName('input')[nInput].value);  
      if(aux > 0 && PermiteNumeros(aux,nInput)){
        let valHist = (aux*produtos[nInput].valorVendido)   
        valHist = parseFloat(valHist.toFixed(2));
        produtos[nInput].resultProd += valHist;
        
        
        addHistorico(nInput,aux,valHist);
      }
    }
         saveProdutos(produtos);
        listaProdutos();
 }


function limpaBase(){ 
    localStorage.clear();   
    listaProdutos();
    window.location.reload();
    
}
function PermiteNumeros(validCont,posicInput){
    let tecla = String(validCont);
 
  if(((tecla >= "0") && (tecla <= "9"))||tecla.length == 0)
   return true
  {
    document.getElementsByTagName('input')[posicInput].value = 0;
  }
}