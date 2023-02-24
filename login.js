const fname = document.getElementById('firstname');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const passwordError = document.getElementById('pw-error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null) {
        messages.push("Name is required")
    }
    if (password.value.length <= 0) {
        messages.push("Password is required")
    }
    if (password.value.length <= 7 && password.value.length > 0) {
        messages.push("Password must be greater or equlat to 8 digits")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})