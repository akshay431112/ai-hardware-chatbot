const chatbox = document.getElementById('chatbox');
const input = document.getElementById('userInput');
let responses = {};

fetch('responses.json')
  .then(response => response.json())
  .then(data => { responses = data; });

function sendMessage() {
  const userText = input.value.trim().toLowerCase();
  if (!userText) return;
  appendMessage('🧑‍💻 You', userText);
  input.value = '';

  let reply = responses[userText] || "❓ Sorry, I don't know that hardware detail. Try something else.";
  appendMessage('🤖 Bot', reply);
}

function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-message';
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}
