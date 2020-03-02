module.exports = function transform(arr) {
    let res=[];
    if(arr instanceof Array){
        for(let i=0;i<arr.length;i++){
        
            if(arr[i]=="--discard-next"){
         i++;
         continue;
        }
        else 
        if(arr[i]=="--discard-prev"){
                 res.pop();
            
        }
        else 
        if(arr[i]=="--double-next"){
            if(i!=arr.length-1)
            res.push(arr[i+1]);
        }
        else 
        if(arr[i]=="--double-prev"){
                if(i>0)
                res.push(arr[i-1]);}
        else 
        res.push(arr[i]);
    }
    
    return res;}
    else 
    throw Error();
};
