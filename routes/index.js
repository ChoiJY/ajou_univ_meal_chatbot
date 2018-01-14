var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// home keyboard implementation
router.get('/keyboard', function (req, res) {
    res.json({
        "type": "buttons",
        "buttons": ["교직원식당", "기숙사식당", "학생식당"]
    })
});

router.post('/message', function (req, res) {
    var userKey = req.body.user_key;
    var type = req.body.type;
    var content = req.body.content;

    res.json({
        "message": {
            "text": "안녕하세요" + "오늘의 " + content + " 메뉴는",
            "photo": {
                "url": "https://www.ajou.ac.kr/_resources/kr/img/life/food_photo05.gif",
                "width": 640,
                "height": 480
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["처음으로"]
        }
    })
})

module.exports = router;
