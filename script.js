const _email = document.querySelector("#_email");

_email.addEventListener("focus", () => {
    _email.placeholder = '';
})

_email.addEventListener("blur", () => {
    _email.placeholder = "eg: John_Doe@gmail.com";
})