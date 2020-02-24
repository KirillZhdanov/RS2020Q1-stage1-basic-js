module.exports = function createDreamTeam(members) {
 let team,acronym="";
 
 if(Array.isArray(members)){
 for(const element of members){
  if(typeof(element)===typeof(""))
  acronym+=element.replace(/\s/g,"").substr(0,1).toUpperCase();
}
  team=acronym.split('').sort().join('');
return team;
 }
 return false;
};
