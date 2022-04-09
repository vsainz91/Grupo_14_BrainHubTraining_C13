const express = require ('express'); 
const app = express(); 
const path = require ('path');
const PORT = 3050
const process = require('process');

// const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')))

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const adminRouter = require('./routes/adminRouter');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use(methodOverride('_method'));

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));

/* Middlewares de Rutas */
app.use('/', indexRouter); // HOME - Contact 

app.use('/login', usersRouter); // Login, registro, perfil
app.use('/admin', adminRouter); // Admin, CRUD Cursos
app.use('/products', productsRouter); //Carrito


app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`
))


