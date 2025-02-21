document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let bitsId = document.getElementById('bitsId').value.trim();
    let hostel = document.getElementById('hostel').value;
    let size = document.querySelector('input[name="size"]:checked');
    let terms = document.getElementById('terms').checked;
    
    let emailPattern = /^[a-zA-Z0-9._%+-]+@pilani\.bits-pilani\.ac\.in$/;
    let bitsIdPattern = /^\d{4}[A-Z]{2}\d{4}P$/;
    
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    if (name.length < 5 || name.length > 50) {
        document.getElementById('nameError').textContent = 'Name must be between 5-50 characters';
        return;
    }
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid BITS Pilani email';
        return;
    }
    if (!bitsIdPattern.test(bitsId)) {
        document.getElementById('bitsIdError').textContent = 'Enter a valid BITS ID';
        return;
    }
    if (!size) {
        document.getElementById('sizeError').textContent = 'Please select a size';
        return;
    }
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms';
        return;
    }
    
    if (localStorage.getItem(bitsId) || localStorage.getItem(email)) {
        alert('You have already registered!');
        return;
    }
    
    localStorage.setItem(bitsId, JSON.stringify({ name, email, phone, hostel, size: size.value }));
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
});