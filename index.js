function updateClock(){
    const now = new Date();
    console.log(now);
    let hours = now.getHours().toString().padStart(2, 0);
    let meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let mins = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2,0 );

    let result = `${hours}:${mins}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = result;
}
setInterval(updateClock, 1000);
 