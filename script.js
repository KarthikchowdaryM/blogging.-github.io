// Toggle Hamburger Menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Toggle menu visibility on click
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Close menu if a menu item is clicked
menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    document.querySelectorAll('.section').forEach((section) => section.classList.add('hidden'));
    targetSection.classList.remove('hidden');
    menu.classList.add('hidden'); // Close menu automatically
  }
});

// Handle Login and Skip Buttons
document.getElementById('login-button').addEventListener('click', () => {
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // Simple form validation (can be expanded)
  if (phone === "" || password === "") {
    alert('Please enter both phone number and password');
  } else {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  }
});

document.getElementById('skip-button').addEventListener('click', () => {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
});

// Payment Modal
const buyButton = document.getElementById('buy-coffee-button');
const paymentModal = document.getElementById('payment-modal');
const closeModal = document.getElementById('close-modal');

buyButton.addEventListener('click', () => {
  paymentModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  paymentModal.classList.add('hidden');
});

// Copy UPI ID
document.getElementById('upi-copy-button').addEventListener('click', () => {
  navigator.clipboard.writeText('9014213240@ybl');
  alert('UPI ID copied!');
});