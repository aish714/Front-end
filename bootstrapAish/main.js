function loadjson(file,callback){
    var aish =new XMLHttpRequest();
    aish.overrideMimeType("application/json");
    aish.open("GET",file,true);
    aish.onreadystatechange=function(){
        if(aish.readyState===4 && aish.status=="200"){
            callback(aish.responseText);
        }
    };
    aish.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
})