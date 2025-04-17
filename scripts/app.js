// This file contains the JavaScript code for the coding club website.
// It handles user interactions, dynamic content updates, and other client-side logic.

document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-club');
    const messageContainer = document.getElementById('message-container');

    joinButton.addEventListener('click', () => {
        const nameInput = document.getElementById('name-input').value;
        if (nameInput) {
            messageContainer.innerHTML = `Welcome to the Coding Club, ${nameInput}!`;
        } else {
            messageContainer.innerHTML = 'Please enter your name to join the club.';
        }
    });
});