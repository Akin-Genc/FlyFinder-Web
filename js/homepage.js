document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.querySelector('.ad-1');
    const video2 = document.querySelector('.ad-2');
    const flightChecker = document.querySelector('.flight-checker');
    const flightAd = document.querySelector('.flight-ad');
    



    window.addEventListener('scroll', function() {
        if (window.scrollY >= 25 && !flightAd.classList.contains('show')) {
            flightAd.classList.add('show');
        } else if (window.scrollY < 10 && flightAd.classList.contains('show')) {
            flightAd.classList.remove('show');
        }
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Pause the videos initially
    video1.pause();
    video2.pause();

    // Play the videos when hovered over
    video1.addEventListener('mouseover', function() {
        this.play();
    });

    video2.addEventListener('mouseover', function() {
        this.play();
    });

    // Pause the videos when mouse leaves
    video1.addEventListener('mouseout', function() {
        this.pause();
    });

    video2.addEventListener('mouseout', function() {
        this.pause();
    });

    // Add scroll event listener for flight-checker
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 10 && !flightChecker.classList.contains('show')) {
            flightChecker.classList.add('show');
        } else if (window.scrollY < 10 && flightChecker.classList.contains('show')) {
            flightChecker.classList.remove('show');
        }
    });
});

