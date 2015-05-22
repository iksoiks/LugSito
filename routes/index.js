var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function (req, res, next) {
    req.models.page.create({title: "John", description: "Doe", text: "LOL"}, function (err) {
        if (err) throw err;
    });
    res.render('index', {title: 'Pagina creata'});
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
