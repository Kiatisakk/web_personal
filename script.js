function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const mailtoLink = `mailto:kiatisakforstudy@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
        window.location.href = mailtoLink;
    } else {
        alert('Please fill in all fields before sending your message.');
    }
}

const roles = [
    "Computer Engineering at KMUTT",
    "Reverse Engineering",
    "Binary Exploitation",
    "Capture the Flag Competitor",
    "Finding true love forever",
    "อยากมีก็ต้องสร้าง",
    "คำพูดมากมายความหมายเท่าเดิม",
    "เดินทางตามหาความฝัน",
    "lnwza007"
];

let currentRoleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // milliseconds per character
const pauseBetweenRoles = 1500; // pause time before switching roles

function typeRole() {
    const typedText = document.getElementById('typed');
    const currentRole = roles[currentRoleIndex];

    // Simulate typing by adding one character at a time
    if (charIndex < currentRole.length) {
        typedText.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        // Pause before deleting or switching to the next role
        setTimeout(changeRole, pauseBetweenRoles);
    }
}

function changeRole() {
    charIndex = 0; // Reset the character index
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Switch to the next role

    // Clear the current text before typing the next role
    document.getElementById('typed').textContent = '';
    typeRole(); // Start typing the next role
}

// Start the typing effect when the page loads
window.onload = typeRole;