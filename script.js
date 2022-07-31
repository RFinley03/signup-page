const elem = document.querySelector("#_email");

_email.addEventListener("focus", () => {
    elem.placeholder = '';
})

_email.addEventListener("blur", () => {
    elem.placeholder = "eg: John_Doe@gmail.com";
})