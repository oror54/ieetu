//modal
$(function () {
    $('.modal-open').on('click', function () {
        var id = $(this).attr('data-modal-id');
        openModal(id);
    })
    $('.modal-close').on('click', function () {
        var id = $(this).parents('.modal-boxed').attr('id');
        closeModal(id);
    })
});

function openModal(id, opt) {
    var $el = $('#' + id);
    $el.addClass('act');
    $('body').addClass('act');
    $('body').removeClass('out');
}
function closeModal(id, opt) {
    var $el = $('#' + id);
    $el.removeClass('act');
    $('body').removeClass('act');
    $('body').addClass('out');
}


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


//뒤로가기
$(function () {
    $('#header .back').on('click', function () {
        window.history.back(); // 이전 페이지로 이동
    });
})

//datepicker
$(function () {
    //input을 datepicker로 선언
    $(".datepicker").datepicker({
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


//arcodion
$(function () {
    $(".rsrvinf .content").click(function () {
        // 클릭된 요소의 부모 요소가 'act' 클래스를 가지고 있는지 확인합니다.
        var isActive = $(this).parent().hasClass("act");

        // 모든 요소에서 'act' 클래스를 제거하고 해당 요소를 닫습니다.
        $(".rsrvinf").removeClass("act");
        $(".rsrvinf .con").slideUp(300);

        // 클릭된 요소의 부모 요소에 'act' 클래스를 추가하고 해당 요소를 엽니다.
        if (!isActive) {
            $(this).siblings(".rsrvinf .con").stop().slideDown(300);
            $(this).parent().addClass("act");
        }
    });
});

// 구장선택
$(function () {
    $(".course input[type='radio']").click(function () {
        // 클릭된 input radio의 라벨 텍스트 가져오기
        let labelText = $(this).siblings("label").text();

        // .rsrv-course input에 클릭된 라벨 텍스트 입력
        $(".rsrv-course").val(labelText);
    });
});

// 시간선택
$(function () {
    const radioButtons = document.querySelectorAll('input[type="radio"][name="time"]');

    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', function () {
            const tit = this.parentElement.querySelector('.detail').innerText;
            document.querySelector('.rsrv-time').value = tit;
        });
    });

});


//이미지 업로드
$(function () {
    // 파일이 업로드되면 실행될 함수 정의
    $('.imgupload').change(function () {
        // 파일이 선택되었는지 확인
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.profile').css('background-image', 'url(' + e.target.result + ')');
            };
            // 파일을 읽기
            reader.readAsDataURL(this.files[0]);
        }
    });
});



//입장버튼
$(function () {
    $(".choice .chc").click(function () {
        // 버튼에 'act' 클래스 추가 및 다른 버튼에서 제거
        $('.choice .chc').removeClass('act');
        $(this).addClass('act');

        // code-wrap의 모든 박스에서 'act' 클래스 제거
        $('.code-wrap .box').removeClass('act');

        // 버튼의 인덱스를 확인하여 해당 박스에 'act' 클래스 추가
        const index = $(this).index();
        $('.code-wrap .box').eq(index).addClass('act');
    });
});

