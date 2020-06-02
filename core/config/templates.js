/**
 * templates.js
 *
 * Descriptions
 *
 * Kakao API JSON Keyboard templates
 *
 * 생성일
 * 2018.1.14
 */
const homeKeyboard = {
  "type": "buttons",
  "buttons": ["교직원식당", "기숙사식당", "학생식당", "학교 밖 추천"]
};

// 초기화면 키보드
const backKeyboard = {
  "type": "buttons",
  "buttons": ["처음으로"]
};

module.exports = {
  homeKeyboard, backKeyboard
};
