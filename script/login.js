let form = document.querySelector('form'),
    btnForm = document.querySelector('form button');

btnForm.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value,
        password = document.querySelector('#password').value;
    

    if(name == 'admin@admin.com' && password == 'admin'){
        window.location.href = "admin.html";
    }else if(name == 'test@gmail.com' && password == 'test'){
        window.location.href = "account.html";
    }else{
        alert('Errors!')
    }
});




