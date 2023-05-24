class MyDate {
constructor(day,month,year){
  this.day=day;
  this.month=month;
  this.year=year
  this.toString=day/month/year
}
setDay(){
  return this.day;
}
setMonth(){
  return this.month
}
setYear(){
  return this.year
}

myDay(day){
  this.day=day;
}
myMonth(month){
  this.month=month;
}
myYear(year){
  this.year=year;
}


}
let date= new MyDate(10/10/2019);
let day =date.setDay(10);
let month=date.setMonth(10);
let year=date.setYear(2019);
const stringObj = new String(10/10/2019);
console.log(stringObj)

alert(day + "/" + month + "/" + year );




