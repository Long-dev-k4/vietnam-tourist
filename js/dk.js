// Lắng nghe sự kiện submit trên form
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector("#signup form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Lấy giá trị từ các trường nhập liệu
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;

        // Kiểm tra thông tin đăng ký
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Mật khẩu và xác nhận mật khẩu không khớp.");
            return;
        }

        // Thêm logic để gửi dữ liệu đến máy chủ (ví dụ: sử dụng fetch API)

        // Hiển thị thông báo đăng ký thành công
        alert("Đăng ký thành công!"); 
        // Chuyển hướng đến trang đăng nhập
        window.location.href = "dangnhap.html"; // Chuyển hướng đến trang đăng nhập
    });
});
