var xhr = new XMLHttpRequest();

xhr.onload = function(e){
    if(xhr.status ===200){
        var response = xhr.responseXML;
        var block = response.getElementsByTagName('block');
        
        for(var i=0; i <block.length; i++){
            var c, f, t;
            c = $('<div>');
            f = $('<img>');
            t = $('<p>');
            f.attr('src', getNodeValue(block[i], 'image')).attr('title', getNodeValue(block[i], 'text'));
            f.css('width', '300px').css('height', '200px').css('marginBottom', '-10px').css('boxShadow', '0px 0px 5px black').css('clear','left').css('marginTop', '20px');
            c.append(f);
            t.append(getNodeValue(block[i], 'text'));
            c.append(t);
            $('#ajax').append(f);
            $('#ajax').append(t);
        }
        function getNodeValue(obj, tag) {
            return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
        } 
    }
};

xhr.open('get', 'data/xml.xml', true);
xhr.send(null);