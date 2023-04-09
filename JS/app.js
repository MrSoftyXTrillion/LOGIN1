let showBtn = document.querySelector ('#login .mainpage .prevpass .eyeon')
let inputField = document.querySelector ('#login .mainpage .prevpass .password')

function togglePassword () {
    console.log (inputField.type)

    if (inputField.type == 'password'){
        inputField.type = 'text';
        showBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    } else {
        inputField.type = 'password';
        showBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
}

showBtn.addEventListener ('click' , togglePassword)