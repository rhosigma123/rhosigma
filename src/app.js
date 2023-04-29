const express = require('express');
const bodyparser = require('body-parser');
const hbs = require('hbs');
const routes = require('./routes/main')
const nodemailer = require('nodemailer')



const app = express()
app.use('', routes)

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('assets'))
app.set('view engine', 'hbs');
app.set("views", "views")
hbs.registerPartials("views/partials")





// app.post()









app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
