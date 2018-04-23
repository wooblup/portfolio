var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    /* Main data JSON file */
    var dataFile = req.app.get('appData');

    /* Object to store About Me Text */
    var aboutMeText = [];

    /* Get About Me Text for index page */
    dataFile.aboutMe.forEach(function(element) {

        aboutMeText.push(element);

    });

    res.render('index', {
        title: 'Portfolio of Tony Nguyen',
        aboutMeText: aboutMeText
    });
});

module.exports = router;
