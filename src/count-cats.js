module.exports = function countCats(matrix) {
  let counter=0;
  let arr=matrix.flat();
  for(const element of arr){
    if(element==='^^'){
    counter++;}
  }
   return counter;
};
