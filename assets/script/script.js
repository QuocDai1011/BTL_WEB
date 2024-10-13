const modals = document.querySelectorAll('.js-navbar'); // Các nút mở modal
const modalsWrapper = document.querySelector('.js-modals'); // Thẻ cha chứa tất cả modal
const modalsContent = document.querySelectorAll('.js-modal'); // Các modal riêng biệt
const closeButtons = document.querySelectorAll('.js-close'); // Nút đóng modal

// Hàm mở hoặc đóng modal theo index
function toggleModal(index) {
    const currentModal = modalsContent[index];

    // Kiểm tra nếu modal hiện tại đã mở
    if (currentModal.classList.contains('open')) {
        // Nếu đã mở, đóng modal
        currentModal.classList.remove('open');
        modals[index].classList.remove('select');

        // Kiểm tra nếu tất cả modal đều đã đóng
        const anyOpen = Array.from(modalsContent).some(modal => modal.classList.contains('open'));
        if (!anyOpen) {
            modalsWrapper.classList.remove('open');
        }
    } else {
        // Đóng tất cả modal trước khi mở modal mới
        modalsContent.forEach(modalContent => modalContent.classList.remove('open'));
        modals.forEach(modal => modal.classList.remove('select'));

        // Hiển thị modal tương ứng và thêm class "select" vào nút tương ứng
        currentModal.classList.add('open');
        modals[index].classList.add('select');

        // Thêm class "open" vào thẻ cha chứa tất cả modal
        modalsWrapper.classList.add('open');
    }
}

// Lắng nghe sự kiện nhấp chuột vào các nút để mở modal
modals.forEach((modal, index) => {
    modal.addEventListener('click', () => {
        toggleModal(index);
    });
});

// Đóng modal khi nhấn vào nút "close"
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modalsContent.forEach(modalContent => modalContent.classList.remove('open'));
        modals.forEach(modal => modal.classList.remove('select'));

        // Xóa class "open" khỏi thẻ cha
        modalsWrapper.classList.remove('open');
    });
});

// Đóng modal khi nhấn ra ngoài modal
window.addEventListener('click', (event) => {
    if (event.target === modalsWrapper) {
        modalsContent.forEach(modalContent => modalContent.classList.remove('open'));
        modals.forEach(modal => modal.classList.remove('select'));

        // Xóa class "open" khỏi thẻ cha
        modalsWrapper.classList.remove('open');
    }
});

//header js 

$(document).ready(function() {
    let scrollInterval; // Biến để lưu trạng thái cuộn liên tục

    // Hàm bắt đầu cuộn trái
    function startScrollLeft() {
        scrollInterval = setInterval(function() {
            $('.header__list').scrollLeft($('.header__list').scrollLeft() - 5);
        }, 10); // Cuộn mỗi 10ms, bạn có thể điều chỉnh tốc độ cuộn bằng cách thay đổi giá trị này
    }

    // Hàm bắt đầu cuộn phải
    function startScrollRight() {
        scrollInterval = setInterval(function() {
            $('.header__list').scrollLeft($('.header__list').scrollLeft() + 5);
        }, 10); // Tương tự như cuộn trái
    }

    // Hàm dừng cuộn khi thả chuột
    function stopScroll() {
        clearInterval(scrollInterval); // Dừng việc cuộn
    }

    // Khi nhấn giữ chuột vào nút trái
    $('.scroll-btn.left').mousedown(function() {
        startScrollLeft();
    }).mouseup(function() {
        stopScroll();
    }).mouseleave(function() {
        stopScroll(); // Nếu chuột rời khỏi nút cuộn, cũng dừng cuộn
    });

    // Khi nhấn giữ chuột vào nút phải
    $('.scroll-btn.right').mousedown(function() {
        startScrollRight();
    }).mouseup(function() {
        stopScroll();
    }).mouseleave(function() {
        stopScroll();
    });
});