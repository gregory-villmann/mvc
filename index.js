const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const DashboardController = require('./controllers/dashboard');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/dashboard', DashboardController.index);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})