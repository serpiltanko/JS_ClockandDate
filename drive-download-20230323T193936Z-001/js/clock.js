let userName = prompt("Kullanıcı Adınızı Giriniz..");

let textinfo = document.querySelector("#myName");
textinfo.innerHTML = `${userName}`;

setInterval(() => {

    let now = new Date();
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
    
    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = daysOfWeek[now.getDay()];
    
    let currentTime = `${hours}:${minutes}:${seconds}`;
    
    document.querySelector("#myClock").innerHTML = `${currentTime} ${dayOfWeek}`;

}, 1000)
