document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.style.backgroundColor = "#e2e6ea";
        });

        service.addEventListener("mouseleave", () => {
            service.style.backgroundColor = "#f8f9fa";
        });
    });
});
