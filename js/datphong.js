document.querySelectorAll('.book-room').forEach(button => {
    button.addEventListener('click', function() {
        const roomType = this.parentElement.querySelector('h4').innerText;
        const price = this.dataset.price;
        alert(`Bạn đã chọn phòng: ${roomType} với giá ${price} VNĐ/đêm.`);
        // Có thể thực hiện các thao tác thêm phòng vào giỏ hàng hoặc điều hướng đến trang thanh toán tại đây.
    });
});
