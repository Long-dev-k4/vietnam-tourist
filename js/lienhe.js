document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.");
    });
});
