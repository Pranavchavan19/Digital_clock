// const clock=document.getElementById('clock')

// setInterval( function (){
//    let date=new Date();
//    clock.innerHTML=date.toLocaleTimeString();
// },1000)


document.addEventListener("DOMContentLoaded", function () {
   function updateClock() {
     const now = new Date();
     let hours = now.getHours();
     const minutes = now.getMinutes();
     const seconds = now.getSeconds();
     const ampm = hours >= 12 ? "PM" : "AM";
 
     hours = hours % 12 || 12; // Convert to 12-hour format
 
     const timeString = `${hours.toString().padStart(2, "0")}:${minutes
       .toString()
       .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
     document.getElementById("clock").textContent = timeString;
   }
 
   setInterval(updateClock, 1000);
   updateClock(); // Initial call
 });
 