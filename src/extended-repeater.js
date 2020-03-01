module.exports = function repeater( str, options) {
    let repeatTimes=options.repeatTimes;
    const separator=options.separator!=undefined&&options.separator!=null?options.separator:'+';
    let addition=options.addition!=undefined?options.addition:"";
    const additionRepeatTimes=options.additionRepeatTimes!=undefined&&options.additionRepeatTimes!=null?options.additionRepeatTimes:0;
    const additionSeparator=options.additionSeparator!=undefined&&options.additionSeparator!=null?options.additionSeparator:"";
    if (str==null) {
        str = 'null';
    }
    if (options.addition==null) {
            addition = 'null';
    }
    let res="",flag=false;
    for(let i=0;i<repeatTimes;i++){
        
        res+=str;
        for(let j=0;j<additionRepeatTimes;j++){
        res+=addition;
        if(j!=additionRepeatTimes-1)
        res+=additionSeparator;
    }
    if(i!=repeatTimes-1)
    res+=separator;
    flag=true;
    }
    if(!flag){
        for(let j=0;j<additionRepeatTimes;j++){
            res+=str+addition;
            if(j!=additionRepeatTimes-1)
            res+=additionSeparator;
            flag=true;
        }
        if(!flag){
            res+=str+addition; 
        }
    }

    return res;
};
  