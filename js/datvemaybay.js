document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("flight-booking");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn không cho trang tải lại

        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const departure = document.getElementById("departure").value;
        const destination = document.getElementById("destination").value;
        const departureDate = document.getElementById("departure-date").value;
        const returnDate = document.getElementById("return-date").value;

        alert(`Cảm ơn ${fullName} đã đặt vé!\nChuyến bay từ ${departure} đến ${destination} vào ngày ${departureDate}.`);
        
        // Reset form
        bookingForm.reset();
    });

    // Xử lý sự kiện cho nút Quay Lại
    document.getElementById("go-back").addEventListener("click", function () {
        window.history.back(); // Quay lại trang trước đó
    });
});

    document.getElementById("check-in").onclick = function() {
        window.location.href = "checkin.html"; // Replace with your actual link
    };


