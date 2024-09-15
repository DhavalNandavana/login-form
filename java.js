function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    document.getElementById('messages').appendChild(userMessage);

    // Scroll to bottom
    const chatbox = document.getElementById('chatbox');
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear input field
    document.getElementById('userInput').value = "";

    // Simulate chatbot reply after a delay
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = "I'm a simple bot. You said: " + userInput;
        document.getElementById('messages').appendChild(botMessage);

        // Scroll to bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}
