document.addEventListener('DOMContentLoaded', function() {
    // Get all the date spans
    const dateSpans = document.querySelectorAll('.dates span');

    // Add click event listener to each date span
    dateSpans.forEach(function(span) {
        span.addEventListener('click', function(event) {
            // Remove 'selected' class from all date spans
            dateSpans.forEach(function(span) {
                span.classList.remove('selected');
            });
            // Add 'selected' class to the clicked date span
            this.classList.add('selected');
            // Stop event propagation to prevent the document click event from being triggered
            event.stopPropagation();
        });
    });
    
    function validateInput(event) {
        let input = event.target.innerText;
        input = input.replace(/\D/g, ''); // Remove non-digit characters
        if (input.length > 1) {
            input = input.slice(0, 1); // Keep only the first digit if more than one digit is entered
        }
        event.target.innerText = input;
    }
    
    // Add click event listener to the document body
    document.body.addEventListener('click', function() {
        // Remove 'selected' class from all date spans when clicking outside the date container
        dateSpans.forEach(function(span) {
            span.classList.remove('selected');
        });
    });
});
