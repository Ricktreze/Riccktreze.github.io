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

    if (produtos.length == 0){
      produtos = criaProdutos();  
    }

    function listaProdutos(){
      if (formEl != null){
        formEl.innerHTML = ''
        for(let toprod in produtos){
            
            var liProd = document.createElement('li')
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
            inputEl.setAttribute("onblur","retValCalc(" + toprod + ") "); 
            inputEl.setAttribute("type","number"); 
            var buttonEl = document.createElement('a');
            var linkHist = document.createElement('a');
            var divMenos = document.createElement('div');
            var linkDivMenos = document.createElement('button');
            var imgMenos  = document.createElement('img');
            var imgMais  = document.createElement('img');
            var divMais = document.createElement('div');
            var linkDivMais = document.createElement('button');
            var divHist = document.createElement('div');
            var inputHist = document.createElement('a');
            inputHist.setAttribute('id','inputHist');
            inputHist.setAttribute('href','historico.html');
            inputHist.textContent = "R$ " + produtos[toprod].resultProd
            
            divHist.setAttribute('id','divHist');
            divHist.appendChild(inputHist);
           
            divMenos.appendChild(linkDivMenos);
            divMais.appendChild(linkDivMais);
            imgMenos.setAttribute('src','img/menosIcon.png');
            imgMais.setAttribute('id','imgMais');
            imgMais.setAttribute('src','img/maisIcon.png');
            imgMenos.setAttribute('id','imgMenos');
            linkDivMenos.setAttribute('id','linkDivMenos');
            divMenos.setAttribute('id','divMenos');
            linkDivMenos.setAttribute('onclick',"subtraiHist(" + toprod + ")");
            linkDivMais.setAttribute('onclick',"somaHist(" + toprod + ")");
            linkDivMenos.appendChild(imgMenos);
            linkDivMais.appendChild(imgMais);
            linkDivMais.setAttribute('id','linkDivMais');
            divMais.setAttribute('id','divMais');
            buttonEl.setAttribute('href','#');
            liProd.setAttribute("id",String(toprod));           
            liProd.appendChild(txtProd);
            liProd.appendChild(inputEl);
            liProd.appendChild(buttonEl);
            liProd.appendChild(linkHist);
            if(txtProd.innerHTML != "Bolo"){
              liProd.appendChild(divMenos);
              liProd.appendChild(divMais);
            }
            inputEl.setAttribute('id',toprod); 
            linkHist.setAttribute('id',toprod);  
            linkHist.appendChild(divHist);        
            formEl.appendChild(liProd);
            produtos[toprod].id = toprod;
            nomeHist =  produtos[toprod].nome
           
            
              linkHist.onclick = () =>{
                savePosic(toprod);
               
              } ;
          }

          var divTotalLink = document.createElement('div');
          var btnTotalLink = document.createElement('button');
          var imgTotalLink = document.createElement('img');

          divTotalLink.setAttribute('id','divTotalLink');
          btnTotalLink.setAttribute('id','btnTotalLink');
          btnTotalLink.setAttribute('href','#');
          imgTotalLink.setAttribute('id','imgTotalLink');
          imgTotalLink.setAttribute('src','img/okIcon.png');
          btnTotalLink.setAttribute('onclick','totalOk()');
          btnTotalLink.appendChild(imgTotalLink);
          divTotalLink.appendChild(btnTotalLink);
          
          formEl.appendChild(divTotalLink);

      }  
    }
  
   listaProdutos();  
  



