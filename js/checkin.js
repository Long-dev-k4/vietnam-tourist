document.querySelectorAll('.select-ticket').forEach(button => {
    button.addEventListener('click', function() {
        const ticketType = this.parentElement.querySelector('h4').innerText;
        const price = this.dataset.price;
        alert(`Bạn đã chọn loại vé: ${ticketType} với giá ${price} VNĐ.`);
        // Có thể thực hiện các thao tác thêm vé vào giỏ hàng hoặc điều hướng đến trang thanh toán tại đây.
    });
});
