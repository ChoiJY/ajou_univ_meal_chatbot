/**
 * index.js
 *
 * Description
 * user input에 따른 kakao api mapping
 *
 * 생성일
 * 2018.1.14
 *
 */
var express = require('express');
var router = express.Router();
var crawler = require('../public/javascripts/crawler');

const request = require('request'),
    cheerio = require('cheerio');

router.get('/', function (req, res, next) {
    res.render('index', {title: '여길 어떻게 알았지 ㅎㅎㅎㅎㅎ?'});
});

// home keyboard implementation
router.get('/keyboard', function (req, res) {
    res.json({
        "type": "buttons",
        "buttons": ["교직원식당", "기숙사식당", "학생식당"]
    })
});

router.get('/test', function (req, res) {
    var menus = crawler.menus();
    console.log(menus);
    res.json(crawler.menus());
});

router.post('/message', function (req, res) {
    var selected = req.body.content;
    console.log(selected);
    if (selected == "처음으로") {
        res.json({
            "message": {
                "text": "원하시는 메뉴를 아래에서 선택해주세요."
            },
            "keyboard": {
                "type": "buttons",
                "buttons": ["교직원식당", "기숙사식당", "학생식당"]
            }
        });
    }
    else {
        res.json({
            "message": {
                "text": selected + " 의 오늘 메뉴를 아래에서 확인해주세요! ",
                "photo": {
                    "url": "https://www.ajou.ac.kr/_resources/kr/img/life/food_photo05.gif",
                    "width": 640,
                    "height": 480
                },
                "message_button": {
                    "label": "메뉴 확인하기",
                    "url": "https://www.ajou.ac.kr/kr/life/food.jsp"
                }
            },
            "keyboard": {
                "type": "buttons",
                "buttons": [
                    "처음으로"
                ]
            }
        });
    }
})
;
// router.post('/message', function (req, res) {
//     var userKey = req.body.user_key;
//     var type = req.body.type;
//     var content = req.body.content;
//     var menus = crawler.menus();
//     var selected;
//     // 기 , 학 , 교
//     if (content != "처음으로") {
//
//         if (content == "기숙사식당") {
//             selected = 0;
//         } else if (content == "학생식당") {
//             selected = 1;
//         } else if (content == "교직원식당") {
//             selected = 2;
//         }
//
//         res.json({
//             "message": {
//                 "text": "안녕하세요\n" + "오늘의 " + content + " 메뉴는 입니다",
//                 "photo": {
//                     "url": "https://www.ajou.ac.kr/_resources/kr/img/life/food_photo05.gif",
//                     "width": 1000,
//                     "height": 1000
//                 },
//                 "message_button": {
//                     "label": menus[selected]
//                 }
//             },
//             "keyboard": {
//                 "type": "buttons",
//                 "buttons": ["처음으로"]
//             }
//         })
//     } else {
//         res.redirect('/');
//     }
// });

module.exports = router;
