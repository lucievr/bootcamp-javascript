document.addEventListener("DOMContentLoaded", () => {

    const padlock = document.querySelector('.padlock');
    const secret = document.querySelector('.secret-msg');

    padlock.addEventListener('mouseenter', () => {
        secret.classList.remove('hidden');
    });

    padlock.addEventListener('mouseleave', () => {
        secret.classList.add('hidden');
    })
});