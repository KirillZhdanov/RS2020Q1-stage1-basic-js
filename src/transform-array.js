module.exports = function transform(arr) {
    let res=[],index=[],flag=false;
    if(arr instanceof Array){
        arr.forEach((element,i)=>{
        if(element=="--discard-next"){
          flag=true;
        }
        else 
        if(element=="--discard-prev"){
            res=res.splice(res.length,1);
            res.pop();
        }
        else 
        if(element=="--double-next"){
            if(i!=arr.length)
            res.push(arr[i+1]);
        }
        else 
        if(element=="--double-prev"){
                if(i>0)res.push(arr[i-1]);}
        else 
        res.push(element);
    })
    
    return res;}
    else 
    throw Error();
};
