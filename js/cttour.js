document.addEventListener("DOMContentLoaded", function () {
    const bookNowButtons = document.querySelectorAll(".book-now");

    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Cảm ơn bạn đã đặt tour! Chúng tôi sẽ liên hệ với bạn sớm.");
        });
    });
});
