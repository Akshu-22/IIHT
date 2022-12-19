function DisplayTime() {
    var date = new Date(); 
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var sess = "AM";
    if(hh >= 12)
    {
        sess="PM";
    }
    if(hh > 12)
    {
        hh = hh - 12;
    }
    if(hh < 10)
    {
        hh = "0" + hh;
    }
    if(mm < 10)
    {
        mm = "0" + mm;
    }
    if(ss < 10)
    {
        ss = "0" + ss;
    }

    document.getElementById("clock").innerHTML = hh + ":" + mm + ":" + ss+ ":"+sess; 
}
setInterval(DisplayTime, 1000);