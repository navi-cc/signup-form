const warningMessage = document.querySelector('.valid');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');


confirmPassword.oninput = function () {
    
    if (this.value === password.value) {
        warningMessage.className = 'valid'; 
        return;
    }
    
    warningMessage.className = 'invalid';

}

