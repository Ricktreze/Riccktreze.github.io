var fomrHistEl = document.getElementById('form-hist');
var table = document.createElement("table");
var prodAux = JSON.parse(localStorage.getItem('produtos')) || [];
var Hitorico = JSON.parse(localStorage.getItem('historico')) || [];
var posic = JSON.parse(localStorage.getItem('posic')) || [];
var nomeProd = '';

    if (fomrHistEl != null){
        fomrHistEl.appendChild(table);
    }

function addTabelaHist(nomeHist,linkHist){
    var contHist = 0
    table.innerHTML = ''
    for(let contProdAux in prodAux){
        if(prodAux[contProdAux].id == posic){
            nomeProd = prodAux[contProdAux].nome
            
        }
    }

    for( contHist in Hitorico){
      
      if( Hitorico[contHist].Nome == nomeProd){
            var nRow = 0;
            var row = table.insertRow(nRow);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            // Add some bold text in the new cell:
                table.setAttribute("border","1px solid black");
                cell1.innerHTML = Hitorico[contHist].Nome;
                cell2.innerHTML =  `Hora: ${Hitorico[contHist].hora}`;
                cell3.innerHTML = `Quantidade: ${Hitorico[contHist].valorCompra}`;
                cell4.innerHTML = `Valor Venda: ${Hitorico[contHist].result}`;

                var linkHistEl = document.createElement('a');                
                var txtLinkHist = document.createElement('img');
                txtLinkHist.setAttribute("src","img/delete.png")
                txtLinkHist.setAttribute("id","imgdelete")
                linkHistEl.appendChild(txtLinkHist);
                linkHistEl.setAttribute('href','#');
               
                var cell5 = row.insertCell(4);
                cell5.setAttribute("id","colDelete");
                cell5.appendChild(linkHistEl);

                linkHistEl.setAttribute('onclick','delHist('+contHist+')');

                nRow++;
            }
           

            
    }
  
}

function delHist(contHist){
    console.log('delHist',prodAux);
    prodAux.forEach(function(item) {
        if (item.nome == Hitorico[contHist].Nome){
            let auxHist = (item.resultProd - Hitorico[contHist].result)
            item.resultProd = parseFloat(auxHist.toFixed(2));
        }

    })  
  
    Hitorico.splice(contHist,1);
    saveProdutos(prodAux);
    saveHistorico(Hitorico);    
    addTabelaHist();

}

     addTabelaHist();