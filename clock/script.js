
function updatehour(){

    let date = new Date();
    let week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    //get the info from the system and save it in a variable
    let dayWeek = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //print the info on the HTML
    
    document.getElementById("dayWeek").textContent=week[dayWeek];
    document.getElementById("month").textContent=months[month];
    document.getElementById("day").textContent=day;
    document.getElementById("year").textContent=year;

    //add a zero for the hours, min, sec with 1 digit
    
    document.getElementById("hour").textContent=hour;
    document.getElementById("min").textContent=min;
    document.getElementById("sec").textContent=sec;

//add the am pm condition
//(KR comments: I am guessing for the ampm I need an if else statment?  Is it better then to do a 12 hour clock with AMPM or a 24 hrs clock for the AMPM?  
  
    
  

var interval = setInterval(updatehour,1000);

}