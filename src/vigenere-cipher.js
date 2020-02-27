class VigenereCipheringMachine {
    encrypt(message,key) {
       // const alphabet=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
       console.log(message);
        message=message.toUpperCase().split("");
        console.log(message);
        let messageCodes=[];
        let keys=key.toUpperCase().split("");
        var i=0;
        /*for(let j=0;j<message.length;j++){
            messageCodes.push((message[j].charCodeAt()));
            i++;
            if(i>key.length)
            i=0;
        }*/
        for(const element of message){
            messageCodes.push((element.toString().charCodeAt()+keys[i].toString().charCodeAt())%26)
            i++;
            if(i>keys.length)
            i=0;
        }
        console.log(messageCodes);
        let result=[];
        for(const element of messageCodes){
            result.push(String.fromCharCode(element));
        }
        return result.join("");
    }

    decrypt(message,key) {
        throw 'Not implemented';
        // remove line with error and write your code here
    }
}

module.exports = VigenereCipheringMachine;
