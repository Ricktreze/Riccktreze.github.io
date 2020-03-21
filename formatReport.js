

   function formatText(prod){
   let messageRetur = '';
        prod.forEach(prod => {
            messageRetur += prod.nome +"|";
            messageRetur += prod.resultProd +"|";
            messageRetur += "\n ";
        });
    return messageRetur
    }
