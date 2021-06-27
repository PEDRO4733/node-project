const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

    

const users = []


app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(flash());

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Pedro'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.Nombre,
            email: req.body.Email,
            password: hashedPassword,
        })
        res.redirect('/login')
        } catch {
        res.redirect('/register')

    }
    console.log(users)
    
})



app.listen(4000)