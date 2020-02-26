module.exports = function getSeason(date) {
  let DateVal=new Date(date);
  if(date===undefined){
    return 'Unable to determine the time of year!';}
  if(!isNaN(date)&&date instanceof Date){
    date=DateVal.getMonth();
    let season;
    (date>1&&date<5)? season='spring':(date>4&&date<8)? season='summer':(date>7&&date<11)? season='fall':(date==0||date==1||date==11)?season='winter':season='';
    return season;}
    else throw Error();
};