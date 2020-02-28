class VigenereCipheringMachine {
    encrypt(message,key) {
        const alphabet=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        message=message.toUpperCase();
        let messageCodes=[];
        let keys=key.toUpperCase();
        let j=0;
        console.log("message:"+message);
        console.log("keys:"+keys);
        for(let i=0;i<message.length;i++){
               if(alphabet.includes(message[i])){
                    let index=((alphabet.indexOf(message[i])+alphabet.indexOf(keys[j]))%26)
                    let tmp=alphabet[index];
                    messageCodes.push(tmp);
                    j++;
                    if(j==keys.length)
                    j=0;
               }
               else 
               messageCodes.push(message[i]);
    }
        console.log("messageCodes:"+messageCodes);
        return messageCodes.join("");
    }

    decrypt(message,key) {
        const alphabet=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        message=message.toUpperCase();
        let messageCodes=[];
        let keys=key.toUpperCase();
        let j=0;
        console.log("message to Decrypt:"+message);
        console.log("keys:"+keys);
        for(let i=0;i<message.length;i++){
                if(alphabet.includes(message[i])){
                   let index=(((alphabet.indexOf(message[i])-alphabet.indexOf(keys[j]))+26)%26)
                   let tmp=alphabet[index];
                   messageCodes.push(tmp);
                    j++;
                    if(j==keys.length)
                    j=0;
                }
                else 
                messageCodes.push(message[i]);      
        }
        console.log("messageCodes  to Decrypt:"+messageCodes);
                return messageCodes.join("");
    }
}

module.exports = VigenereCipheringMachine;
