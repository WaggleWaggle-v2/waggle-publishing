$(document).ready(function () {
    $('.tab_btn ul').hide(); // 처음에 .tab_btn ul 숨기기

    $('.tab_menu a').on('click', function (e) {
        e.preventDefault(); // 기본 동작 방지
        const $ul = $('.tab_btn ul');
        if ($ul.is(':visible')) {
            $ul.slideUp(); // 이미 열려있으면 닫기
        } else {
            $ul.slideDown(); // 닫혀있으면 열기
        }

        const $img = $(this).find('img'); // 이미지 변경
        $img.attr('src', $img.attr('src') === $img.data('default-src') ? $img.data('active-src') : $img.data('default-src'));
    });

    $(document).on('click', function (e) { // 배경 클릭 시 슬라이드 업
        if (!$(e.target).closest('.tab_menu, .tab_btn, .header_pc').length) {
            $('.tab_btn ul').slideUp();
            $('.tab_menu img').attr('src', $('.tab_menu img').data('default-src')); // 이미지 초기화
        }
    });
});