const screenshot = require('screenshot-desktop'),
    fs = require('fs');

function captureScreenshot(num) {
    screenshot()
        .then((img) => {
            fs.writeFile('ss' + num + '.jpg', img, (err) => {
                if (err)
                    throw err;
                console.log('Screenshot saved as ss' + num + '.jpg');
            })
        })
        .catch((err) => {
            throw err;
        });
}

module.exports = captureScreenshot;