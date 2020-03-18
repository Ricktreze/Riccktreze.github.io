var formEl = document.getElementById('repo-Form');
var testeel = document.createTextNode('teste');
var nomeHist = '';

var resul = 20;
var inputEl //= //document.createElement('input');

var nScan   =   0;

var toprod = 0;
   // console.log(produtos);
    var result = ''
    var pos = 0;
    
    var produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    console.log("Json",JSON.parse(localStorage.getItem('produtos')) || [])
    if (produtos.length == 0){
      console.log("Tamanho zero", produtos)
      produtos = criaProdutos();
      console.log("Cria PRodutos", produtos)
    }

    function listaProdutos(){
      if (formEl != null){
        formEl.innerHTML = ''
        console.log("antes do for",produtos);
        for(let toprod in produtos){
            
            var liProd = document.createElement('li')
           // var txtProd = document.createTextNode(produtos[toprod].nome);
            var txtProd = document.createElement("label");
            txtProd.innerHTML = produtos[toprod].nome;
            inputEl = document.createElement('input');
            if(txtProd.innerHTML == "Bolo"){
              inputEl.setAttribute('maxlength','3');
              inputEl.setAttribute('class','bolo');
            }else{
              inputEl.setAttribute('maxlength','2');
              inputEl.setAttribute('class','nobolo');
            }
            var buttonEl = document.createElement('a');
            var txtConfirma = document.createTextNode('Confirma');
            var linkHist = document.createElement('a');
            var txtLinkHist = document.createTextNode('Histórico');
            var brasaoEl    = document.createTextNode("R$");
            console.log("listaProdutos",produtos[toprod].resultProd);
            var txtResult = document.createTextNode(produtos[toprod].resultProd);
    
            buttonEl.setAttribute('href','#')
            linkHist.setAttribute('href','historico.html')
            linkHist.appendChild(txtLinkHist);
            liProd.setAttribute("id",String(toprod));           
            liProd.appendChild(txtProd);
            liProd.appendChild(inputEl);
            liProd.appendChild(buttonEl);
            liProd.appendChild(brasaoEl);
            liProd.appendChild(txtResult);
            liProd.appendChild(linkHist);
      
            //liProd.appendChild(divLiEl);
            buttonEl.appendChild(txtConfirma);
            inputEl.setAttribute('id',toprod); 
            linkHist.setAttribute('id',toprod);          
            formEl.appendChild(liProd);
            produtos[toprod].id = toprod;
            nomeHist =  produtos[toprod].nome
           
            buttonEl.setAttribute("onclick","retValCalc(" + toprod + ")");
            //linkHist.setAttribute("onclick","addTabelaHist(" + toprod + ","+linkHist+" )");
            
              linkHist.onclick = () =>{
                savePosic(toprod);
               
              } ;
          }
      }  
    }
  
   listaProdutos();  
  



