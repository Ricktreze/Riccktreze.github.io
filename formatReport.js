

   function formatText(prod){
   let messageRetur = '';
        prod.forEach(prod => {
            messageRetur += `Produto: ${prod.nome} | `;
            messageRetur += `Total: ${prod.resultProd} |`;
            messageRetur += "\n ";
        });
    return messageRetur
    }
