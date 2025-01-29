const funnyMessages = [
    "1 raza pa footpath ger shwe wo 💀",
    "2 wakeel seb la weg jorawal ghware 🌾",
    "3 yaseen sa che ropy khatam she bya kali waryad she",
    "4 hilal pero wala  ",
    "5 younas aslahi wala ",
    "6 guldar da mustafa tra de 📚",
    "7 awais chai kharab kali wo bya warta khaze wal ta nasha kali da ☃🧛",
];

let currentIndex = 0; // Track the current message index

function showFunnyMessage() {
    const messageElement = document.getElementById('funny-message');
    
    // Display the current message
    messageElement.textContent = funnyMessages[currentIndex];
    
    // Move to the next message
    currentIndex = (currentIndex + 1) % funnyMessages.length; // Loop back to the start after the last message
}