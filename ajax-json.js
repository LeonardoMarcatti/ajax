var xhr = new XMLHttpRequest();

xhr.onload = function(e){
    if(xhr.status ===200){
        responseObject = JSON.parse(xhr.responseText);
        
        var c='';
        
        for(var i=0; i<responseObject.block.length; i++){
            c+='<div>';
            c+='<img src=' + responseObject.block[i].image + '>';
            c+='<p>'+ responseObject.block[i].text + '</p>';
            c+='</div>';
        };
        $('#ajax').html(c);
    };
};

xhr.open('GET', 'data/json.json', true);
xhr.send(null); 