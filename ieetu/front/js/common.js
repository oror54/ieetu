//헤더 고정
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 30) {
            $(".header").addClass('fixed')
        } else {
            $(".header").removeClass('fixed')
        };
    })
})

// 헤더 모바일
$(function () {
    $(".header").on('mouseenter', function () {
        $('.header').addClass('on');
    }).on('mouseleave', function () {
        $('.header').removeClass('on');
    });
    $(".header.on").on('mouseleave', function () {
        $('.header').removeClass('on');
    });

    //mobile
    $('body').on('click', '.mBtn', function () {
        if ($(this).hasClass('close')) {
            $(".lnb").fadeOut(1000);
            $(this).removeClass('close');
            $('body').removeClass('active');
        } else {
            $(".lnb").fadeIn(1000);
            $(this).addClass('close');
            $('body').addClass('active');
        }
    });
    $('.mlnb > li').each(function () {
        var gnbArea = $(".mlnb > li");
        var gnbLink = $(this).children('a');
        if ($(this).children('ul').length > 0) {
            gnbLink.on('click', function (e) {
                e.preventDefault();
                gnbArea.children('ul').stop().slideUp();
                $(this).addClass('active');
                $(this).siblings('a').addClass('active');
                $(this).parent().children('ul').stop().slideDown();
                return false;
            });
        }
    });
})

// 클라우드
$(function () {
    const accordion = (function () {

        const $accordion = $('.accordion');
        const $accordion_header = $accordion.find('.acrd-header');
        const $accordion_item = $('.acrd');

        // default settings 
        const settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on('click', function () {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

            },
            toggle: function ($this) {

                if (settings.oneOpen && $this[0] != $this.closest('.accordion').find('> .acrd.active > .acrd-header')[0]) {
                    $this.closest('.accordion')
                        .find('> .acrd')
                        .removeClass('active')
                        .find('.acrd-body')
                        .slideUp()
                }
                // show/hide the clicked accordion item
                $this.closest('.acrd').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();

    $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
    });
})

//이름 입력 유효성 체크
$(function () {
    let elFailureMessage = document.querySelector('.error');
    $("#inputName").blur(function () {
        // 입력된 전화번호 가져오기
        var name = $("#inputName").val();
        if (name) {
            // 정규식을 사용하여 형식 검사
            var regex = /^[가-힣a-zA-Z]+$/;

            if (regex.test(name)) {
                // 올바른 형식일 경우
                elFailureMessage.classList.add('hide');
            } else {
                // 잘못된 형식일 경우
                elFailureMessage.classList.remove('hide');
                $("#inputName").val("");
                return false;
            }
        }
    });
})


//전화번호 입력 유효성 체크
$(function () {
    let elFailureMessage = document.querySelector('.error');
    $("#inputNumber").blur(function () {
        // 입력된 전화번호 가져오기
        var phoneNumber = $("#inputNumber").val();
        if (phoneNumber) {
            // 정규식을 사용하여 형식 검사
            var regex = /^(01[0-9]{1}-?[0-9]{4}-?[0-9]{4}|01[0-9]{8})$/;

            if (regex.test(phoneNumber)) {
                // 올바른 형식일 경우
                elFailureMessage.classList.add('hide');
            } else {
                // 잘못된 형식일 경우
                elFailureMessage.classList.remove('hide');
                $("#inputNumber").val("");
                return false;
            }

            var pcs = phoneNumber;

            // 입력된 문자열에서 하이픈('-')을 제거하여 숫자만 추출
            var pcs = pcs.replace(/[^0-9]/g, '');

            // 전화번호 형식 (010-1234-5678)으로 변환
            if (pcs.length === 10) {
                pcs = pcs.substring(0, 3) + '-' + pcs.substring(3, 7) + '-' + pcs.substring(7, 11);
            } else if (pcs.length === 11) {
                pcs = pcs.substring(0, 3) + '-' + pcs.substring(3, 7) + '-' + pcs.substring(7, 11);
            }

            $("#inputNumber").val(pcs);
        }
    });
})


//이메일 입력 유효성 체크
$(function () {
    let elFailureMessage = document.querySelector('.error');
    $("#inputEmail").blur(function () {
        // 입력된 전화번호 가져오기
        var email = $("#inputEmail").val();
        if (email) {
            // 정규식을 사용하여 형식 검사
            var regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

            if (regex.test(email)) {
                // 올바른 형식일 경우
                elFailureMessage.classList.add('hide');
            } else {
                // 잘못된 형식일 경우
                elFailureMessage.classList.remove('hide');
                $("#inputEmail").val("");
                return false;
            }
        }
    });
})

//문의내용 
$(function () {
    // 500자
    $("#message").keyup(function (e) {
        //console.log("키업!");
        var content = $(this).val();
        $("#textLengthCheck").text("(" + content.length + " / 500)"); //실시간 글자수 카운팅
        if (content.length > 300) {
            alert("최대 500자까지 입력 가능합니다.");
            $(this).val(content.substring(0, 500));
            $('#textLengthCheck').text("(500 / 500)");
        }
    });
})

// 문의하기 효과
$(function () {
    $(".contact-bt").click(function () {
        $(".contact-bt").toggle('scale');
        $(".contact-box").toggle('scale');
    })

    $(".clsoe-btn").click(function () {
        $(".contact-bt").toggle('scale');
        $(".contact-box").toggle('scale');
    })
})

