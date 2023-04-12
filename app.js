const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('login');
});


app.post('/matriculas', (req, res) => {
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;

   
    if (usuario === 'sebastian' && contrasena === '123456789') {
        res.render('matriculas');
    } else {
        
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
});


app.post('/confirmacion', (req, res) => {
    const curso = req.body.curso;
    const medioPago = req.body.medioPago;
    const niveles = req.body.niveles;
    
    res.render('confirmacion', { curso, medioPago, niveles });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});