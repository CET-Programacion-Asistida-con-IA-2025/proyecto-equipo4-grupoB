// --- Global Functions and Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // This ensures the script runs only after the entire HTML document is loaded.
    console.log("DOM fully loaded and parsed. JavaScript is running!");

    // Initialize functions for specific pages if their elements exist
    if (document.getElementById('commentForm')) {
        setupCommentForm();
    }
    if (document.querySelector('.map-container iframe')) {
        setupMapInteractivity();
    }
    // Add any other page-specific initializations here
});


// --- Function for "Acerca de nosotras" page (Form Submission) ---
function setupCommentForm() {
    const commentForm = document.getElementById('commentForm');

    // Check if the form exists on the current page
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission (page reload)

            const nameInput = document.getElementById('nombre');
            const commentInput = document.getElementById('comentario');

            const userName = nameInput.value.trim();
            const userComment = commentInput.value.trim();

            if (userName === '' || userComment === '') {
                alert('Por favor, completa tu nombre y tu comentario antes de enviar.');
                return; // Stop the function if validation fails
            }

            // --- Simulate Form Submission ---
            // In a real application, you would send this data to a server here.
            // For now, we'll just log it and provide user feedback.
            console.log('Comentario Recibido:');
            console.log('Nombre:', userName);
            console.log('Comentario:', userComment);

            alert('¡Gracias por tu comentario, ' + userName + '! Lo valoramos mucho.');

            // Clear the form fields after successful (simulated) submission
            nameInput.value = '';
            commentInput.value = '';
        });
    }
}


// --- Function for "Emergencia" page (Map Interactivity Placeholder) ---
function setupMapInteractivity() {
    const mapIframe = document.querySelector('.map-container iframe');

    if (mapIframe) {
        // You could add event listeners to the iframe or overlay elements
        // to provide more interactive feedback.
        // For a full interactive map (like Google Maps), you would
        // use their API, which requires an API key and more complex JS.

        // For now, let's just confirm it's set up
        console.log("Map iframe detected on Emergencia page.");

        // Example: Change the iframe source if you had a different map for mobile/desktop
        // Or add a "Click to open in Google Maps" button
        const mapContainer = mapIframe.closest('.map-container');
        if (mapContainer && !document.getElementById('mapLinkButton')) {
            const mapLinkButton = document.createElement('button');
            mapLinkButton.textContent = 'Ver en Google Maps (nueva pestaña)';
            mapLinkButton.id = 'mapLinkButton';
            mapLinkButton.style.cssText = `
                background-color: #6B9EBD;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
                font-size: 1em;
                transition: background-color 0.3s ease;
            `;
            mapLinkButton.onmouseover = () => mapLinkButton.style.backgroundColor = '#05334A';
            mapLinkButton.onmouseout = () => mapLinkButton.style.backgroundColor = '#6B9EBD';

            mapLinkButton.addEventListener('click', () => {
                // This link is a placeholder. A real map link would use coordinates or a search query.
                window.open('https://www.google.com/maps/search/hospitales+cerca+de+mi', '_blank');
            });
            mapContainer.appendChild(mapLinkButton);
        }
    }
}

// --- General Button Animation/Feedback (Applies to all buttons) ---
// This is already largely handled by CSS :hover states, but for more complex
// animations, JS would be needed (e.g., adding/removing classes on click).
// For now, the existing CSS transition is effective.
// If you wanted a "click" effect, you'd add/remove a class briefly.
/*
document.querySelectorAll('a[class^="button-"], button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked-animation'); // Add a class for click animation
        setTimeout(() => {
            this.classList.remove('clicked-animation'); // Remove after a short delay
        }, 300); // Adjust duration as needed
    });
});
// You'd then add a .clicked-animation class to your CSS:
// .clicked-animation {
//     transform: scale(0.98);
//     transition: transform 0.1s ease-out;
// }
*/
