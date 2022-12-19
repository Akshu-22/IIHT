var storage =  window.localStorage;
//storage.setItem('name','Akshata');

function disp(){
    let name=storage.getItem('name');
    document.getElementById("p1").innerHTML=`<h1>Welcome ${name}</h1>`;
}

navigator.geolocation.getCurrentPosition(updateLocation,handleLocationError);

function updateLocation(position){
   console.log('in updatelocation');
   console.log(JSON.stringify(position));
    var latitude =  position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy =  position.coords.accuracy;
   document.getElementById("lat").innerHTML=latitude;
   document.getElementById("long").innerHTML=longitude;
   
   document.getElementById("acc").innerHTML="this location is accurate with "+accuracy+"meters";
   

}
function  handleLocationError(err){

    switch(err.code){

        case 0:
            updateStatus('retrieving error');
            break;
        case 1 :
            updateStatus('prevented page');
            break;
        case 2:
            updateStatus('unable to retrieve location');
            break;  
        case 3:
            updateStatus('time out');
            break;   
    }
}