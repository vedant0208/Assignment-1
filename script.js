// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer
    const eventDate = new Date('June 15, 2024 00:00:00').getTime();
    const countdown = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdown.innerHTML = 'The event has started!';
        }
    }

    setInterval(updateCountdown, 1000);

    // Accordion for Schedule
    const accordions = document.querySelectorAll('.accordion-title');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('active');
        });
    });

    // Tabs for Speakers
    function openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName('tabcontent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('tablinks');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className += ' active';
    }

    document.querySelectorAll('.tablinks').forEach(tab => {
        tab.addEventListener('click', function (e) {
            openTab(e, this.textContent);
        });
    });
});
