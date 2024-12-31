$(function () {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    $('.date').html(year + '-' + month + '-' + date + '(' + weekdays[day] + ")");

})