const express = require('express')
const app = express()
const port = 80

//pug filess
app.set('view engine', 'pug');

//static folder
app.use('/static',express.static('static'));

// get request
app.get('/', (req, res) => {
    res.status(200).render('index');
})
app.post('/submit',(req,res)=>{
  
    res.render('submit');
})
app.get('/home', (req, res) => {
    res.status(200).render('index');
})
//listean port
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})