// JavaScript File

// Personalize welcome message
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const userName = "Abimanyu"; // Change this name as needed
    welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;
});

// Form validation and output
document.getElementById("messageForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const message = document.getElementById("message").value;

    // Validation
    if (!name || !date || !gender || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Display form output
    const formOutput = document.getElementById("formOutput");
    formOutput.innerHTML = `
        <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${date}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    // Clear form fields
    document.getElementById("messageForm").reset();
});