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

// $(function () {
//     // 전체 체크박스 클릭
//     $("#allcheck").click(function () {
//         const isChecked = $(this).prop("checked");
//         $(".unitcheck").prop("checked", isChecked);
//     });

//     // 개별 체크박스 클릭 시 전체 체크박스 상태 업데이트
//     $(".unitcheck").click(function () {
//         const totalCheckBoxes = $(".unitcheck").length; // 전체 개별 체크박스 개수
//         const checkedCheckBoxes = $(".unitcheck:checked").length; // 체크된 개별 체크박스 개수
//         $("#allcheck").prop("checked", totalCheckBoxes === checkedCheckBoxes);
//     });
// });
$(function () {
    // 전체 체크박스 클릭 이벤트
    $("#allcheck").click(function () {
        const isChecked = $(this).prop("checked");
        $(".unitcheck").prop("checked", isChecked);
    });

    // 개별 체크박스 클릭 이벤트
    $(".unitcheck").click(function () {
        const totalCheckBoxes = $(".unitcheck").length; // 전체 개별 체크박스 개수
        const checkedCheckBoxes = $(".unitcheck:checked").length; // 체크된 개별 체크박스 개수

        // 모든 체크박스가 체크되었는지 확인
        $("#allcheck").prop("checked", totalCheckBoxes === checkedCheckBoxes);
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



// header 현재 시간
$(function () {
    const now = new Date();

    // 포맷팅
    const formattedTime = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // <p> 태그에 텍스트 삽입
    $('.time .now').text(formattedTime);
});



// 장비이력보기 버튼 활성화
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