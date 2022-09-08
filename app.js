const express = require('express');
const path = require ('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) ); 

app.listen(3000,function() {
    console.log('FUNCIONA');
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
});