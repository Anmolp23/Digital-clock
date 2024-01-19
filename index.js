function  currentime(){
let hour=document.getElementById("hours");
let minute=document.getElementById("minutes");
let second=document.getElementById("seconds");
let period=document.getElementById("period");

let currentdate = new Date();
let time1 =currentdate.getHours();
let minute1=currentdate.getMinutes() 
let second1=currentdate.getSeconds();
let ampm= time1>=12 ? "PM":"AM";

if(time1>12)
time1=time1-12;

time1=(time1<=9) ? "0"+time1:time1;
minute=(minute<=9) ? "0"+minute:minute;
second=(second<=9) ? "0"+second:second;
period=(period<=9) ? "0"+period:period;

hour.innerHTML=time1;
minute.innerHTML=minute1;
second.innerHTML=second1;
period.innerHTML=ampm;
};

setInterval(currentime,1000);

