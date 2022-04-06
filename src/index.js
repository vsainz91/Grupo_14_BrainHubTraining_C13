const express = require ('express'); 
const app = express(); 
const path = require ('path');
const fs = require('fs');
const PORT = 3050


app.use(express.static(path.join(__dirname, 'public')))

/* enrutadores */
const productsRouter = require ('./routes/productsRouter');

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));


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

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, "products.json"), "utf-8")),
    writeProducts: (data) => {
        fs.writeFileSync(path.join(__dirname, "products.json"), JSON.stringify(data));
    }
}

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`
))


