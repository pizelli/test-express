module.exports = function(app){
    app.get('/', function(req,res){
        res.send('<h1>Bem vindo!</h1>')
    })
    app.get('/products', function(req,res){
        res.send('<h1>Produtos!</h1>')
    })
    app.get('/categories', function(req,res){
        res.send('<h1>Categorias!</h1>')
    })
    app.get('/contact', function(req,res){
        res.send('<h1>Contato!</h1>')
    })
}