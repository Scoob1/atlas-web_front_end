// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Attach event listeners to buttons
  document.getElementById('setCookies').addEventListener('click', setCookie);
  document.getElementById('showCookies').addEventListener('click', showCookies);
});

// Funct set cookies in localStorage
function setCookie() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  if (firstName) {
    localStorage.setItem('firstname', firstName);
  }

  if (email) {
    localStorage.setItem('email', email);
  }

  alert('Cookies wookie set!');
}

function getCookie(name) {
  return localStorage.getItem(name);
}

function showCookies() {
  const firstName = getCookie('firstname') || 'Not set';
  const email = getCookie('email') || 'Not set';

  const paragraph = document.createElement('p');
  paragraph.textContent = `Cookies: First Name: ${firstName}, Email: ${email}`;
  document.body.appendChild(paragraph);
}
