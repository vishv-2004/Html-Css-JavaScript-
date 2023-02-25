setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hoursdeg = hours*30 + min/2 + sec/120;
    let mindeg = 6*min + sec/10;
    let secdeg = 6*sec;
    document.getElementById('hour').style.transform=`rotate(${hoursdeg}deg)` 
    document.getElementById('min').style.transform=`rotate(${mindeg}deg)` 
    document.getElementById('sec').style.transform=`rotate(${secdeg}deg)` 
}, 1000);