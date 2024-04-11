const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json())


app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.send('Welcome to JSON POST response demo page');
})

app.get('/welcome', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'Welcome traveller' })
    console.log('http://localhost:3000/welcome');

})

app.post('/postcities', (req, res) => {
    console.log('Post cities of europe');
    console.log(req.body);
     // echo json back to client
     res.json(req.body);


})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// https://expressjs.com/en/starter/hello-world.html