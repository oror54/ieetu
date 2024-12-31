//header
$(function () {
    $(".gnb .dp1 .da1").click(function () {
        var list = $(this).index();
        $(".gnb .dp1 .da1").removeClass("act");
        $(this).addClass("act");
        $(".depth2").hide();
        $(".depth2").eq(list).show();
    });
    $(".gnb-btn").click(function () {
        $("body").stop().toggleClass("min");
        return false;
    });
});


//tab
$(function () {
    $(".nav-item").click(function () {
        var val = $(this).attr('data-tab');
        console.log(val);
        $('.nav-item').removeClass('act');
        $(this).addClass('act');
        $(".tabs-content").attr('data-tab-act', val);
    });
})


//예약일 datepicker 
$(function () {
    //input을 datepicker로 선언
    $(".date").datepicker({
        dateFormat: 'mmdd' //달력 날짜 형태
        , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
        , changeYear: false //option값 년 선택 가능
        , changeMonth: false //option값  월 선택 가능                
        , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        , buttonText: "선택" //버튼 호버 텍스트              
        , yearSuffix: "."
        , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
        , monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'] //달력의 월 부분 Tooltip
        , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
        , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
        , minDate: "0" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
        , showAnim: "fold"
        , altField: ".rsrv-date"
        , beforeShowDay: function (date) {
            var dayOfWeek = date.getDay();
            // 월요일(1)인 경우 선택 불가능하게 설정
            return [(dayOfWeek != 1)];
        }
        , onSelect: function (dateText, inst) {
            let date = $(this).datepicker('getDate');
            let dayNames = ['일', '월', '화', '수', '목', '금', '토'];
            let dayOfWeek = dayNames[date.getDay()];
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let formattedDate = month + '월 ' + day + '일 ' + dayOfWeek + '요일';
            $('.rsrv-date').val(formattedDate);
        },
        beforeShow: function (input, inst) {
            // 클릭시 활성화되도록 설정
            $(input).prop("readonly", true);
            // 초기값으로 플레이스홀더 설정
            if (!$(input).val()) {
                $(input).attr("placeholder");
            }
        },
    });

    // 초기값을 오늘 날짜로 설정해줍니다.
    let today = new Date();
    $('.datepicker').datepicker('setDate', today);
    updateRsrvDateField(today); // 초기값 설정
    $('.rsrv-date').val('');

    function updateRsrvDateField(date) {
        let dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        let dayOfWeek = dayNames[date.getDay()];
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let formattedDate = month + '월 ' + day + '일 ' + dayOfWeek + '요일';
        $('.rsrv-date').val(formattedDate);
    }
});

//공휴일등록
$(function () {
    //input을 datepicker로 선언
    $(".datepick").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
        , changeYear: false //option값 년 선택 가능
        , changeMonth: false //option값  월 선택 가능                
        , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        , buttonText: "선택" //버튼 호버 텍스트              
        , yearSuffix: "."
        , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
        , monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'] //달력의 월 부분 Tooltip
        , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
        , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
        , minDate: "0" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
        , showAnim: "fold"
        , altField: ".ipt-date"
        , onSelect: function (dateText, inst) {
            let date = $(this).datepicker('getDate');
            // 연, 월, 일을 yyyy.mm.dd 형식으로 변환합니다.
            let year = date.getFullYear();
            let month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 두 자리로 변환
            let day = String(date.getDate()).padStart(2, '0'); // 일을 두 자리로 변환
            let formattedDate = `${year}.${month}.${day}`;
            $('.ipt-date').val(formattedDate);
        },
    });
});




//체크박스선택
$(function () {
    //전체 체크박스 클릭
    $("#allcheck").click(function () {
        if ($("#allcheck").prop("checked")) {
            $(".unitcheck").prop("checked", true);
        } else {
            $(".unitcheck").prop("checked", false);
        }
    });
    //전체 체크박스 선택중 체크박스 하나를 풀었을때 "전체" 체크해제
    $(".unitcheck").click(function () {
        if ($("input[name='check']:checked").length == 10) {
            $("#allcheck").prop("checked", true);
        } else {
            $("#allcheck").prop("checked", false);
        }
    });
});



//휴무일선택

$(function () {
    // 페이지 식별자 요소 확인
    const pageClass = document.querySelector('.close-register');
    if (pageClass) {
        // 요소 선택
        const selectElement = document.querySelector('.close-sel');
        const formWrap = document.querySelector('.close-form-wrap');

        // 첫 번째와 두 번째 form 요소 선택
        const [firstForm, secondForm] = formWrap.querySelectorAll('.clsoe-form');

        // select 요소에 change 이벤트 리스너 추가
        selectElement.addEventListener('change', (event) => {
            const selectedValue = event.target.value;

            // 두 form 요소 모두에서 act 클래스 제거
            firstForm.classList.remove('act');
            secondForm.classList.remove('act');

            // 선택한 옵션에 따라 act 클래스 추가
            if (selectedValue === '임시휴무일') {
                firstForm.classList.add('act');
            } else if (selectedValue === '정기휴무일') {
                secondForm.classList.add('act');
            }
        });
    }
});




// 시간선택
$(function () {
    $('input.timepicker').each(function () {
        // 현재 input 요소가 readonly 속성을 가지고 있는지 확인
        if ($(this).prop('readonly')) {
            // readonly 속성이 true이면 timepicker를 초기화하지 않음
            return;
        }

        // timepicker를 초기화
        $(this).timepicker({
            timeFormat: 'HH:mm',
            startTime: '00:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });
    });
});


//리스트 구장별로 보기
$(function () {
    const buttons = document.querySelectorAll('.view-buttons .bt-view');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            buttons.forEach(btn => btn.classList.remove('act'));
            event.target.classList.add('act');

            changeTableContent(event.target);
        });
    });
})


//이미지 업로드
$(function () {
    // 파일이 업로드되면 실행될 함수 정의
    $('.imgupload').change(function () {
        // 파일이 선택되었는지 확인
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.course').css('background-image', 'url(' + e.target.result + ')');
            };
            // 파일을 읽기
            reader.readAsDataURL(this.files[0]);
        }
    });
});



//대시보드 날짜 선택
$(function () {
    $(function () {
        //input을 datepicker로 선언
        $(".date-picker").datepicker({
            dateFormat: 'yy-mm-dd' //달력 날짜 형태
            , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
            , changeYear: false //option값 년 선택 가능
            , changeMonth: false //option값  월 선택 가능                
            , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
            , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
            , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
            , buttonText: "선택" //버튼 호버 텍스트              
            , yearSuffix: "."
            , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
            , monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'] //달력의 월 부분 Tooltip
            , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
            , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
            , minDate: "0" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
            , showAnim: "fold"
            , altField: ".ipt-date"
            , onSelect: function (dateText, inst) {
                let date = $(this).datepicker('getDate');
                // 연, 월, 일을 yyyy.mm.dd 형식으로 변환합니다.
                let year = date.getFullYear();
                let month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 두 자리로 변환
                let day = String(date.getDate()).padStart(2, '0'); // 일을 두 자리로 변환
                let formattedDate = `${year}.${month}.${day}`;
                $('.ipt-date').val(formattedDate);
            },
        });
    });
})




//대시보드 슬라이드
$(function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        loop: false,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})



//chart.js
$(function () {
    // 페이지에 dashboard 클래스가 있는지 확인
    if (!$('main').hasClass('dashboard')) {
        return; // 클래스가 없으면 코드 실행 중지
    }

    const circuference = 260; // deg

    //회원별 방문자 수
    const ctx1 = document.getElementById('myChart1').getContext('2d');

    const gradient1 = ctx1.createLinearGradient(0, 0, 0, 40); // 수직 그래디언트
    gradient1.addColorStop(0, '#FFCACA'); // 시작 색상
    gradient1.addColorStop(1, '#f26f6f'); // 끝 색상

    const gradient2 = ctx1.createLinearGradient(0, 0, 0, 40); // 수직 그래디언트
    gradient2.addColorStop(0, '#ffd989'); // 시작 색상
    gradient2.addColorStop(1, '#ffc234'); // 끝 색상

    const data1 = {
        labels: ["클럽회원", "일반회원"],
        datasets: [
            {
                label: "방문자 수 ",
                data: [300, 100],
                backgroundColor: [gradient1, gradient2]
            }
        ]
    };

    const config1 = {
        type: "doughnut",
        data: data1,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            rotation: (circuference / 2) * -1,
            circumference: circuference,
            cutout: "80%",
            borderWidth: 0,
            borderRadius: function (context, options) {
                const index = context.dataIndex;
                let radius = {};
                if (index == 0) {
                    radius.innerStart = 50;
                    radius.outerStart = 50;
                }
                if (index === context.dataset.data.length - 1) {
                    radius.innerEnd = 50;
                    radius.outerEnd = 50;
                }
                return radius;
            },
            layout: {
                padding: {
                    top: 30,
                    bottom: 100,
                }
            },
            plugins: {
                title: false,
                subtitle: false,
                legend: false,
            },
        }
    };

    const myChart1 = new Chart("myChart1", config1);

    //구장병 방문자 수
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const gradient11 = ctx2.createLinearGradient(0, 0, 0, 40); // 수직 그래디언트
    gradient11.addColorStop(0, '#D7ECB4'); // 시작 색상
    gradient11.addColorStop(1, '#9dc978'); // 끝 색상

    const gradient22 = ctx2.createLinearGradient(0, 0, 0, 40); // 수직 그래디언트
    gradient22.addColorStop(0, '#DDF2EC'); // 시작 색상
    gradient22.addColorStop(1, '#86baba'); // 끝 색상

    const data2 = {
        labels: ["수성구장", "팔현구장"],
        datasets: [
            {
                label: "방문자 수 ",
                data: [150, 250],
                backgroundColor: [gradient11, gradient22]
            }
        ]
    };

    const config2 = {
        type: "doughnut",
        data: data2,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            rotation: (circuference / 2) * -1,
            circumference: circuference,
            cutout: "80%",
            borderWidth: 0,
            borderRadius: function (context, options) {
                const index = context.dataIndex;
                let radius = {};
                if (index == 0) {
                    radius.innerStart = 50;
                    radius.outerStart = 50;
                }
                if (index === context.dataset.data.length - 1) {
                    radius.innerEnd = 50;
                    radius.outerEnd = 50;
                }
                return radius;
            },
            layout: {
                padding: {
                    top: 30,
                    bottom: 100,
                }
            },
            plugins: {
                title: false,
                subtitle: false,
                legend: false,
            },
        }
    };

    const myChart2 = new Chart("myChart2", config2);
});
