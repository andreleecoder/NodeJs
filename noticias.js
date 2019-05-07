var http= require('http');
var server =http.createServer(function(req, res){
    
    var categoria= req.url;

    if(categoria=='/tecnologia'){
        res.end("<html><body>Noticias de tecnologia</body></html>")
    } if(categoria=='/moda'){
        res.end("<html><body>Noticias de moda</body></html>")
    }if(categoria=='/esportes'){
        res.end("<html><body>Noticias de esportes</body></html>")
    }else{
    res.end("<html><body>Portal de noticias</body></html>")}
});
server.listen(3000);