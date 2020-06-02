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
const express = require('express');
const router = express.Router();
const crawler = require('../crawler/crawler');
const templates = require('../config/templates');

router.get('/', (req, res) => {
  res.render('index', {title: '여길 어떻게 알았지 ㅎㅎㅎㅎㅎ?'});
});

// home keyboard implementation
router.get('/keyboard', (req, res) => {

  // keyboard layout form
  const keyboard = {
    "type": "buttons",
    "buttons": ["ex1", "ex2", "ex3"]
  };

  res.json(keyboard);
});

router.post('/message', function (req, res) {

  const userID = req.body.user_key;
  const type = req.body.type;
  const content = req.body.content;

  res.json(templates.homeKeyboard)
});

router.get('/test', (req, res) => {

  const menus = crawler.menus();
  console.log(menus);

  res.json(crawler.menus());
});

// auto response implementation
router.post('/message', (req, res) => {

  const selected = req.body.content;
  let imageUrl = "";

  if (selected === "처음으로") {
    res.json({
      "message": {
        "text": "원하시는 메뉴를 아래에서 선택해주세요."
      },
      "keyboard": templates.homeKeyboard
    });
  } else if (selected === "학교 밖 추천") {
    res.json({
      "message": {
        "text": "지금 개발중이에요.ㅠㅠ"
      },
      "keyboard": templates.backKeyboard
    })
  } else {

    if (selected === "학생식당") {
      imageUrl = "https://www.ajou.ac.kr/_resources/kr/img/life/img_food_02.gif";
    } else if (selected === "교직원식당") {
      imageUrl = "https://www.ajou.ac.kr/_resources/kr/img/life/food_photo05.gif";
    } else {
      imageUrl = "https://www.ajou.ac.kr/_resources/kr/img/life/img_food_03.gif";
    }

    res.json({
      message: {
        text: `${selected}의 오늘 메뉴를 아래에서 확인해 주세요!`,
        photo: {
          url: imageUrl,
          width: 640,
          height: 480
        },
        message_button: {
          label: '메뉴 확인하기',
          url: 'https://www.ajou.ac.kr/kr/life/food.jsp'
        }
      },
      keyboard: templates.backKeyboard
    });
  }
});

module.exports = router;
