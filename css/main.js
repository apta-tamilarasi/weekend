var today=new Date();

document.write("TODAY"+"<br><br>"+today+"<br><br>");

var day=today.getDate();

document.write("This day "+day+"<br><br>");

if((day==0)||(day==6)){
   document.write("Today   "+ day+"  is Week End"); 
}

else{
    document.write("Today   "+ day+"  is  not Week End"); 
}
