// Get DOM elements
const chatButton = document.getElementById('chat-button');
const chatWidget = document.getElementById('chat-widget');
const closeChatButton = document.getElementById('close-chat');

// Toggle chat widget visibility when the chat button is clicked
chatButton.addEventListener('click', () => {
    chatWidget.style.display = 'block';
});

// Close the chat widget when the close button is clicked
closeChatButton.addEventListener('click', () => {
    chatWidget.style.display = 'none';
});

// Add more functionality to handle chat messages and interactions as needed
