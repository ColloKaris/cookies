const express = require('express');
const app = express();

// Require the cookie parser
const cookieParser = require('cookie-parser')
// Execute cookieParser
app.use(cookieParser('thisismysecret'));


app.get('/greet', (req,res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`);
})

app.get('/setname', (req,res) => {
    res.cookie('name','henrietta');
    res.cookie('animal', 'harlequin shrimp')
    res.send('OK SENT YOU A COOKIE')
})

app.get('/getsignedcookie', (req,res) => {
    res.cookie('fruit', 'grape', {signed: true})
    res.send("OK SIGNED YOUR FRUIT COOKIE!")
})

app.get('/verifyfruit', (req,res) => {
    console.log(req.cookies);
    res.send(req.signedCookies)
})




app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})