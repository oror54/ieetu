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
// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e) {
    var ModalClose = $(".modal-boxed");
    if (ModalClose.has(e.target).length === 0) {
        ModalClose.removeClass("act");
    }
});



//체크박스
function checkSelectAll() {
    // 전체 체크박스
    const checkboxes
        = document.querySelectorAll('input[name="check"]');
    // 선택된 체크박스
    const checked
        = document.querySelectorAll('input[name="check"]:checked');
    // select all 체크박스
    const selectAll
        = document.querySelector('input[name="allcheck"]');

    if (checkboxes.length === checked.length) {
        selectAll.checked = true;
    } else {
        selectAll.checked = false;
    }

}

function selectAll(selectAll) {
    const checkboxes
        = document.getElementsByName('check');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}