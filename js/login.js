function generateCaptcha() {
  const length = Math.floor(Math.random() * (6 - 4 + 1)) + 4; // Random length between 4 and 6
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < length; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

function switchToLogin() {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginBox').classList.remove('hidden');
  document.querySelector('.login-box h2').textContent = 'Login';
  generateAndDisplayCaptcha(); // Generate new CAPTCHA for login
}

function switchToRegister() {
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
  document.querySelector('.login-box h2').textContent = 'Register';
}

function generateAndDisplayCaptcha() {
  const captcha = generateCaptcha();
  document.getElementById('captchaText').textContent = captcha;
  sessionStorage.setItem('captcha', captcha); // Store CAPTCHA in sessionStorage
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize with register form visible
  switchToRegister();
  document.getElementById('loginBox').classList.add('hidden'); // Ensure login is hidden initially
});

// Handle registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Mật khẩu và xác nhận mật khẩu không khớp!');
    return;
  }

  if (username && email && password) {
    // Store user data in localStorage (simulating a simple user database)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
      alert('Email đã được sử dụng!');
      return;
    }
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Set the logged-in user
    localStorage.setItem('user', JSON.stringify({ fullname: username }));
    alert(`Đăng kí thành công với email: ${email}`);
    window.location.href = 'index.html';
  } else {
    alert('Vui lòng điền đầy đủ thông tin!');
  }
});

// Handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const userCaptcha = document.getElementById('captcha').value;
  const storedCaptcha = sessionStorage.getItem('captcha');

  if (userCaptcha !== storedCaptcha) {
    alert('Captcha không đúng!');
    generateAndDisplayCaptcha(); // Refresh CAPTCHA on failure
    return;
  }

  if (email && password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Set the logged-in user
      localStorage.setItem('user', JSON.stringify({ fullname: user.username }));
      alert(`Đăng nhập thành công với email: ${email}`);
      window.location.href = 'index.html';
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  } else {
    alert('Vui lòng điền đầy đủ thông tin!');
  }
});