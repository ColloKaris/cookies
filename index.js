const express = require('express');
const app = express();


app.get('/greet', (req,res) => {
    res.send("Hey There!")
})

app.get('/setname', (req,res) => {
    res.cookie('name','henrietta');
    res.cookie('animal', 'harlequin shrimp')
    res.send('OK SENT YOU A COOKIE')
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})