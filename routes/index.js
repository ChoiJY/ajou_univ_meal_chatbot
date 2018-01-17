var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: kakao});
});

// home keyboard implementation
router.get('/keyboard', function (req, res) {

    // keyboard layout form
    const keyboard = {
        "type": "buttons",
        "buttons": ["ex1", "ex2", "ex3"]
    };

    res.json(keyboard);
});

router.post('/message', function (req, res) {
    var userID = req.body.user_key;
    var type = req.body.type;
    var content = req.body.content;

    res.json();
})

module.exports = router;
