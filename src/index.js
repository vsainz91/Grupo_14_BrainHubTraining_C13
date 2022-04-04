const express = require ('express'); 
const app = express(); 
const path = require ('path');
const PORT = 3050

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html')) 
} )
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/login.html')) 
} )
app.get('/productCart', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/productCart.html')) 
} )
app.get('/productDetail', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/productDetail.html')) 
} )
app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/register.html')) 
} )

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`
))


