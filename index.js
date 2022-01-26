// ===================
// Dependencies
// ===================

const express = require('express'),
    app = express(),
    ejs = require('ejs'),
    capss = require('./capss'),
    bodyParser = require('body-parser');

// ===================
// App Config
// ===================

app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// ===================
// Routes
// ===================

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/capture', (req, res) => {
    const times = req.body.times;
    const duration = req.body.duration;
    res.render('capture.ejs', { capss: capss, duration: duration, times: times });
})

// ===================
// Port
// ===================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Express server started at PORT ' + PORT);
});