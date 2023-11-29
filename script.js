// Add this JavaScript code to handle card click events
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.mouse_move img');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const targetModalId = this.getAttribute('data-target');
            const targetModal = document.querySelector(targetModalId);

            if (targetModal) {
                $(targetModal).modal('show');
            }
        });
    });
});
