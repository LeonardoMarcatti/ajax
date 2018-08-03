var xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(xhr.status === 200){
        $('#ajax').html(xhr.responseText);
    }
};
    
    xhr.open('GET', 'data/html.html', true);
    xhr.send(null);