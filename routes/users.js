module.exports = function(app){
    const users = [{
        id: 1,
        nome: "Giovanni",
        email: 'teste@teste.com.br'
    },{
        id: 2,
        nome: 'Magda',
        email: 'magda@teste.com.br'
    }]
    
    app.get('/users/:id', function(req, res){
        let user = users.filter(e => e.id == req.params.id)
        if(user.length > 0){
            res.send(`<h3>Seja bem vindo, ${user[0].nome}</h3>`)
        }else{
            res.send('<p>Usuario não encontrado!</p>')
        }
    })

    app.get('/users', function(req,res){
        res.json({
            users
        })
    })
}