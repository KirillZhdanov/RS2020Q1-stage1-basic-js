module.exports = function createDreamTeam(members) {
 let team,acronym="";
 let arr=members.flat();
 console.log(members);
 
 if(Array.isArray(members)){
 for(const element of arr){
  if(typeof(element)===typeof("")){
  acronym+=element.replace(/\s/g,"").substr(0,1).toUpperCase();}
   
}

  team=acronym.split('').sort().join('');
console.log(team);
return team;
 }
 return false;
};
