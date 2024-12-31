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

//이미지 업로드
$(function () {
    // 파일이 업로드되면 실행될 함수 정의
    $('.profile-upload').change(function () {
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
    $('.course-upload').change(function () {
        // 파일이 선택되었는지 확인
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.crs .img').css('background-image', 'url(' + e.target.result + ')');
            };
            // 파일을 읽기
            reader.readAsDataURL(this.files[0]);
        }
    });

    // 체인점 이미지 올리기
    $('.chain-upload').change(function () {
        // 파일이 선택되었는지 확인
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.chain .img').css('background-image', 'url(' + e.target.result + ')');
            };
            // 파일을 읽기
            reader.readAsDataURL(this.files[0]);
        }
    });


    //광고 이미지 업로드
    $('.img-upload').change(function () {
        // 파일이 선택되었는지 확인
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                // 이미지 요소에 배경 이미지 설정
                $('.ads-image').css('background-image', 'url(' + e.target.result + ')');
            };
            // 파일을 읽기
            reader.readAsDataURL(this.files[0]);
        }
    });

    // 광고영상 업로드
    $('.video-upload').change(function () {
        if (this.files && this.files[0]) {
            let file = this.files[0];
            let videoContainer = document.querySelector('.ads-video');

            if (videoContainer.querySelector('video')) {
                videoContainer.querySelector('video').remove();
            }

            let video = document.createElement('video');
            video.controls = true; // 비디오 제어 버튼 표시

            let source = document.createElement('source');
            source.type = 'video/mp4'; // 기본 비디오 타입 설정

            let videoURL = URL.createObjectURL(file);
            source.src = videoURL;

            video.appendChild(source);
            videoContainer.appendChild(video);

            video.load();
        }
    });
});