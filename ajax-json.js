var xhr = new XMLHttpRequest();

xhr.onload = function(e){
    if(xhr.status ===200){
        responseObject = JSON.parse(xhr.responseText);
        
        var c='';
        
        for(var i=0; i<responseObject.events.length; i++){
            c+='<div>';
            c+='<img src=' + responseObject.events[i].image + '>';
            c+='<p>'+ responseObject.events[i].text + '</p>';
        };
    };
}