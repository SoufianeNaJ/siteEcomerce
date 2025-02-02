let form = document.getElementById('form_sign')
let usrName = document.getElementById('usrName');
let Email = document.getElementById('Email');
let password = document.getElementById('password');
let vefifierpass = document.getElementById('vefifierpass');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validatForm();
})


function validatForm(){
    const usr = usrName.value;
    const email = Email.value;
    const pass = password.value;

if(/soufiane/i.test(usr)){
    usrName.style.borderColor = 'green'
}
else{
    usrName.style.borderColor = 'red'
}

if(/soufianenaji@gmail.com/g.test(email)){
    Email.style.borderColor = 'green'
}
else{
    Email.style.borderColor = 'red'
}

if(/Soso@naji2004/g.test(pass)){
    password.style.borderColor = 'green'
}
else{
    password.style.borderColor = 'red'
}

let data = {
    a:usrName.value,
    p:Email.value,
    c:password.value,
    d:vefifierpass.value
}
let JS = JSON.stringify(data)
console.log(JS)
}

