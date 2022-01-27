// ===================
// Dependencies
// ===================

const express = require('express'),
    app = express(),
    ejs = require('ejs'),
    captureScreenshot = require('./modules/captureScreenshot'),
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
    console.log("Times = " + times);
    console.log("Duration = " + duration);
    res.render('capture.ejs', { captureScreenshot: captureScreenshot, duration: duration, times: times });
})

// ===================
// Port
// ===================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Express server started at PORT ' + PORT);
});