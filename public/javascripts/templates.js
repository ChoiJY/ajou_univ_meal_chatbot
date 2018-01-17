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

// 아직은 안써도 될듯 TODO 나중에 scale 커지면 분리
// module.exports = function(){
//
//     const templates = [];
//
//     // 버튼형 homeKeyboard
//     const homeKeyboard = {
//         "type": "buttons",
//         "buttons": ["교직원식당", "기숙사식당", "학생식당", "학교 밖 추천"]
//     };
//
//     templates.push({"homeKeyboard": homeKeyboard});
//
//     return templates;
// };

// 몇개없으니 object로 하는게 지금은 더 귀찮음
exports.homeKeyboard = {
    "type": "buttons",
    "buttons": ["교직원식당", "기숙사식당", "학생식당", "학교 밖 추천"]
};

// 초기화면 키보드
exports.backKeyboard = {
    "type": "buttons",
    "buttons": ["처음으로"]
};