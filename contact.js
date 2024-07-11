const nameInput = document.getElementById('text');
const emailInput = document.getElementById('email');

const submitButton = document.getElementById('finle');

submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;

    if(name !== ''&& email !== ''){
        console.log('Name:', name);
        console.log('Email:', email);
        nameInput.value = ''
        emailInput.value = ''
    }





});