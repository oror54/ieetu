//arcodion
$(function () {
    $(".scoreinf .inner-wrap .inner").click(function () {
        // 클릭된 요소의 부모 요소가 'act' 클래스를 가지고 있는지 확인합니다.
        var isActive = $(this).parent().hasClass("act");

        // 모든 요소에서 'act' 클래스를 제거하고 해당 요소를 닫습니다.
        $(".inner-wrap").removeClass("act");
        $(".inner-wrap .content").slideUp(300);

        // 클릭된 요소의 부모 요소에 'act' 클래스를 추가하고 해당 요소를 엽니다.
        if (!isActive) {
            $(this).siblings(".inner-wrap .content").stop().slideDown(300);
            $(this).parent().addClass("act");
        }
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
                $('.profile .img').css('background-image', 'url(' + e.target.result + ')');
            };
            // 파일을 읽기
            reader.readAsDataURL(this.files[0]);
        }
    });
});

//hole 선택
$(function () {
    $(".hole-wrap .hole-swiper .hole .hole-btn .num-btn").click(function () {
        // 버튼에 'act' 클래스 추가 및 다른 버튼에서 제거
        $('.hole-btn .num-btn').removeClass('act');
        $(this).addClass('act');
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

