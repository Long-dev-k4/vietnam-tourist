// Lắng nghe sự kiện submit trên form
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#login form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Lấy giá trị từ các trường nhập liệu
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        // Kiểm tra thông tin đăng nhập (mẫu)
        if (email === "example@example.com" && password === "123456") {
            alert("Đăng nhập thành công!");
            // Ở đây bạn có thể chuyển hướng đến trang chính
            window.location.href = "index.html"; // Chuyển hướng đến trang chủ
        } else {
            alert("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
        }
    });
});
