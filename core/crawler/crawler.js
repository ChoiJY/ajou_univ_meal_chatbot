/**
 * crawler.js
 *
 * description
 * 학교 홈페이지의 식단을 crawling 하는 module
 *
 * @return
 * menus(array) : [ domMenu,
 *                  studentMenu,
 *                  staffMenu ]
 *
 * 생성일
 * 2018.1.14
 *
 */
const request = require('request');
const cheerio = require('cheerio');

exports.menus = () => {

  request('http://www.ajou.ac.kr/new/life/food.jsp', function (err, res, html) {

    let menus = [];
    let domMenu = "";
    let studentMenu = "";
    let staffMenu = "";

    if (!err) {
      let $ = cheerio.load(html);
      // 기숙사식당 메뉴
      $('tri_list02').each(function (i, e) {
        if (timeCompare() === i) {
          domMenu = $(e).text().trim();
        } else {
          domMenu = "현재 영업시간이 아닙니다.";
        }
        menus.push(domMenu);
      });

      // TODO 방학이라 식단이 제대로 안나옴 주중에 바꿔야함
      // 학생식당 메뉴 & 교직원 식당 메뉴
      $('.align-c.no_right').each(function (i, e) {
        // 학생식당
        if (i === 0) {
          studentMenu = $(e).text().trim();
        } else if (i === 1) {
          staffMenu = $(e).text().trim();
        } else {
          // TODO 종합관 교직원식당 추가 필요
        }
        menus.push(studentMenu);
        menus.push(staffMenu);
      });

      return menus;
    }
  });

  /**
   * timeCompare()
   *
   * Description
   * 현재 시간과 학교 식당 시간표 비교하는 function
   *
   * 생성일
   * 2018.1.14
   *
   * @returns
   * 현재 시간이 8:00~10:00 -> 0
   *          11:00~15:00 -> 1
   *          17:00~19:00 -> 2
   *          else -> 3
   */
  function timeCompare() {

    let now = new Date();
    let nowHours = now.getHours();

    if (nowHours > 8 && nowHours < 10) {
      return 0;
    } else if (nowHours >= 11 && nowHours < 15) {
      return 1;
    } else if (nowHours >= 17 && nowHours < 19) {
      return 2;
    } else {
      return 3;
    }
  }
};
