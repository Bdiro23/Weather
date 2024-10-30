
navigator.geolocation.getCurrentPosition(show);
function show(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const Xhr=new XMLHttpRequest();
    const Xhr2=new XMLHttpRequest();
Xhr.open('GET','https://api.tomorrow.io/v4/weather/forecast?location='+latitude+','+longitude+'&apikey=R3pZfcLtIjPiuxbOKYzR8JN1NYbet6Sf');
Xhr2.open('GET','https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+latitude+'&lon='+longitude);
Xhr.onload = function api(){
    var Api=JSON.parse(Xhr.response);
    console.log(Api);
    var aujourdhui = new Date();
    var jour_mois=aujourdhui.getDate();
    console.log(jour_mois);

    document.getElementById('temperature').innerHTML=Api.timelines.hourly[0].values.temperatureApparent+"°";

    for(var i=0;i<6;i++){
        var jour_mois_api = parseInt(Api.timelines.daily[i].time.slice(8, 10));

        if(jour_mois==jour_mois_api){
            
            document.getElementById('feelslike').innerHTML=Api.timelines.daily[i].values.temperatureMax+"° / "+Api.timelines.daily[i].values.temperatureMin+"°";

            var weathercode=Api.timelines.daily[i].values.weatherCodeMax;
            console.log(weathercode);

            document.getElementById('sunrise').innerHTML=Api.timelines.daily[i].values.sunriseTime.slice(11,16);      
            document.getElementById('sunset').innerHTML=Api.timelines.daily[i].values.sunsetTime.slice(11,16);   
            
            var Api_heursChSoleil=parseInt(Api.timelines.daily[i].values.sunsetTime.slice(11,13));
            var Api_heursLevSoleil=parseInt(Api.timelines.daily[i].values.sunriseTime.slice(11,13));
         break;
        }
    }

   
    function animation(){
        icon.style.animationName = 'translate'; 
        icon.style.animationDuration = '2s'; 
        icon.style.animationIterationCount = 'infinite'; 
        icon.style.animationDirection = 'alternate-reverse';
        
    }

    switch(weathercode){
        case 1000:
            document.getElementById('icon').className="fa-solid fa-sun";  
            break;
        case 1001:
            document.getElementById('icon').className="fa-solid fa-cloud";  
            animation();
            break;
        case 1100:
            document.getElementById('icon').className="fa-solid fa-cloud-sun";  
            animation();
            break;
        case 2000:
            document.getElementById('icon').className="fa-solid fa-smog";  
            animation();
            break;
        case 4200:
            document.getElementById('icon').className="fa-solid fa-cloud-rain";  
            animation();
            break;
        case 5100:
            document.getElementById('icon').className="fa-solid fa-snowflake";  
            animation();
            break;
        case 8000:
            document.getElementById('icon').className="fa-solid fa-cloud-bolt";  
            animation();
            break;
    }
     
    var jour = aujourdhui.getDay(); 
    var heurs=aujourdhui.getHours();
    var minute=aujourdhui.getMinutes();
    console.log(jour);
    console.log(minute);
    console.log(jour_mois);
    console.log(heurs);

    switch(jour){
        case 0:
            document.getElementById('jourheurs').innerHTML="Dim "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Lundi";
            document.getElementById('nextday2').innerHTML="Mardi";
            document.getElementById('nextday3').innerHTML="Mercredi";
            document.getElementById('nextday4').innerHTML="Jeudi";
            document.getElementById('nextday5').innerHTML="Vendredi";
            break;
        case 1:
            document.getElementById('jourheurs').innerHTML="Lun "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Mardi";
            document.getElementById('nextday2').innerHTML="Mercredi";
            document.getElementById('nextday3').innerHTML="Jeudi";
            document.getElementById('nextday4').innerHTML="Vendredi";
            document.getElementById('nextday5').innerHTML="Samedi";
            break;
        case 2:
            document.getElementById('jourheurs').innerHTML="Mar "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Mercredi";
            document.getElementById('nextday2').innerHTML="Jeudi";
            document.getElementById('nextday3').innerHTML="Vendredi";
            document.getElementById('nextday4').innerHTML="Samedi";
            document.getElementById('nextday5').innerHTML="Dimanche";
            break;
        case 3:
            document.getElementById('jourheurs').innerHTML="Mer "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Jeudi";
            document.getElementById('nextday2').innerHTML="Vendredi";
            document.getElementById('nextday3').innerHTML="Samedi";
            document.getElementById('nextday4').innerHTML="Dimanche";
            document.getElementById('nextday5').innerHTML="Lundi";
            break;
        case 4:
            document.getElementById('jourheurs').innerHTML="Jeu "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Vendredi";
            document.getElementById('nextday2').innerHTML="Samedi";
            document.getElementById('nextday3').innerHTML="Dimanche";
            document.getElementById('nextday4').innerHTML="Lundi";
            document.getElementById('nextday5').innerHTML="Mardi";
            break;
        case 5:
            document.getElementById('jourheurs').innerHTML="Ven "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Samedi";
            document.getElementById('nextday2').innerHTML="Dimanche";
            document.getElementById('nextday3').innerHTML="Lundi";
            document.getElementById('nextday4').innerHTML="Mardi";
            document.getElementById('nextday5').innerHTML="Mercredi";
            break;
        case 6:
            document.getElementById('jourheurs').innerHTML="Sam "+heurs+":" + (minute < 10 ? "0" : "") + minute;
            document.getElementById('jours_actuel').innerHTML="ajourd'hui";
            document.getElementById('nextday1').innerHTML="Dimanche";
            document.getElementById('nextday2').innerHTML="Lundi";
            document.getElementById('nextday3').innerHTML="Mardi";
            document.getElementById('nextday4').innerHTML="Mercredi";
            document.getElementById('nextday5').innerHTML="Jeudi";
            break;
    }
        console.log(Api_heursChSoleil);

        for(i=0;i<12;i++){
            document.getElementById('heurs_prochain'+i).innerHTML=Api.timelines.hourly[i].time.slice(11,16);
            document.getElementById('temp_prochain'+i).innerHTML=Api.timelines.hourly[i].values.temperature+"°";
            document.getElementById('precipit_prochain'+i).innerHTML=Api.timelines.hourly[i].values.precipitationProbability+"%";

            var weathercodeheurs=Api.timelines.hourly[i].values.weatherCode;
            
            var les_heurs=parseInt(Api.timelines.hourly[i].time.slice(11,13)); 
            switch(weathercodeheurs){
                case 1000:
                    document.getElementById('icon_'+i).innerHTMl="fa-solid fa-sun";  
                    break;
                case 1001:
                    document.getElementById('icon_'+i).className="fa-solid fa-cloud";  
                    break;
                case 1100:
                    document.getElementById('icon_'+i).className="fa-solid fa-cloud-sun";  
                    break;
                case 1101:
                    document.getElementById('icon_'+i).className="fa-solid fa-cloud-sun";  
                    break;
                case 1102:
                    document.getElementById('icon_'+i).className="fa-solid fa-cloud-sun";  
                    break;
                case 2000:
                    document.getElementById('icon_'+i).className="fa-solid fa-smog";  
                    break;
                case 4200:
                    document.getElementById('icon_'+i).className="fa-solid fa-cloud-rain";  
                    break;
                case 5100:
                    document.getElementById('icon_'+i).className="fa-solid fa-snowflake";  
                    break;
                case 8000:
                    document.getElementById('icon_'+i).className="fa-solid fa-cloud-bolt";  
                    break;
             }

             if((les_heurs>=Api_heursChSoleil) || (les_heurs<=Api_heursLevSoleil)){
                document.getElementById('icon_'+i).className="fa-solid fa-moon"; 
             
              if((weathercodeheurs==1001) || (weathercodeheurs==1101)){
                 document.getElementById('icon_'+i).className="fa-solid fa-cloud-moon";         
                }
               else if((weathercodeheurs==4200) || (weathercodeheurs==8000) ){
                 document.getElementById('icon_'+i).className="fa-solid fa-cloud-moon-rain";
                 }
 
             }     
    
        }
        
        if((heurs>=Api_heursChSoleil) || (heurs<=Api_heursLevSoleil)){
                document.getElementById('icon').className="fa-solid fa-moon";
                animation();   

             if((weathercode==1001) || (weathercode==1101) || (weathercode==1102)){
                    document.getElementById('icon').className="fa-solid fa-cloud-moon";   
                    animation();         
             }
             else if((weathercode==4200)){
                    document.getElementById('icon').className="fa-solid fa-cloud-moon-rain";
                    animation();   
             }
             
        }
    
        
        for(i=0;i<6;i++){
            document.getElementById('precipit_'+i).innerHTML=" "+Api.timelines.daily[i].values.precipitationProbabilityAvg+"%";
            document.getElementById('degmax_'+i).innerHTML=parseInt(Api.timelines.daily[i].values.temperatureApparentMax)+"°";
            document.getElementById('degmin_'+i).innerHTML=parseInt(Api.timelines.daily[i].values.temperatureApparentMin)+"°";
            weathercode=Api.timelines.daily[i].values.weatherCodeMax;
            switch(weathercode){
                case 1001:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-cloud"; 
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-cloud-moon"; 
                    break;
                case 1100:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-cloud-sun";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-cloud-moon";
                    break;
                case 1101:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-cloud-sun";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-cloud-moon";
                    break;
                case 1102:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-cloud-sun";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-cloud-moon";
                    break;
                case 2000:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-smog";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-moon";
                    break;
                case 4200:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-cloud-rain";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-cloud-moon-rain";
                    break;
                case 5100:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-snowflake";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-moon";
                    break;
                case 8000:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-cloud-bolt";  
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-moon";
                    break;
                default:
                    document.getElementById('weatherdaytime_'+i).className="fa-solid fa-sun"; 
                    document.getElementById('weatherdaynight_'+i).className="fa-solid fa-moon";
                    
            }

        }
          
}

Xhr2.onload = function api2(){
    var Api2=JSON.parse(Xhr2.response);
    console.log(Api2);
    var city=Api2.address.city;
    document.getElementById('city').innerHTML=city;
}
Xhr.onerror=function api(){
    console.log('la requette a echoué');
}
Xhr2.onerror=function api2(){
    console.log('la requette 2 a echoué');
}

Xhr.send();
Xhr2.send();
}