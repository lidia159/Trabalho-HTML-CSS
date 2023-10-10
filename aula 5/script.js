const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textoTextarea = document.querySelector("#texto");

form.addEventListener("submit", (event) => {
    event.preventDefault();


//Se todos os campos estiverem corretamente preenchidos , envie o form
form.submit();
});

//função que valida nome
function isNameValid(name){

    const nameRegex = new RegExp(
        //usuario26
        /^[a-zA-Z0-9._-]+\{2,}$/
    );

    if(nameRegex.test(name)){
        return true;
    }
    return false;
}

//função que valida e-mail

function isEmailValid(email){

    //cria uma regex para validdar email
    const emailRegex = new RegExp(
        //usuario26@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-za-a]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}