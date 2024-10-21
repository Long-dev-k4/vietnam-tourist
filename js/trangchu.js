// Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.aspect-ratio-169');
    const images = document.querySelectorAll('.aspect-ratio-169 img');
    const dotItems = document.querySelectorAll('.dot');
    const totalImages = images.length;
    let currentIndex = 0;
    let interval;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        document.querySelector('.dot.active').classList.remove('active');
        dotItems[currentIndex].classList.add('active');
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(moveToNextSlide, 3000);
    }

    dotItems.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateSlider();
            resetInterval(); // Restart the interval on dot click
        });
    });

    interval = setInterval(moveToNextSlide, 3000);
});


// btn
document.querySelector('button').addEventListener('click', function() {
    alert("Đặt tour thành công!");
});
