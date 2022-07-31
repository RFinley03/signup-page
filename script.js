const _name = document.querySelector("#_name");
const _email = document.querySelector("#_email");
const submit = document.querySelector(".submit");
const _ul = document.querySelector("#_ul");
const list = [];

_email.addEventListener("focus", () => {
    _email.placeholder = '';
})

_email.addEventListener("blur", () => {
    _email.placeholder = "eg: John_Doe@gmail.com";
})

submit.addEventListener("click", e => {
    e.preventDefault();
    if (_email.value === "" || _name === "") {
        let _li = document.createElement("li");
        _li.classList.add('alert');
        _li.appendChild(document.createTextNode(`* please enter all text fields`));
        _ul.prepend(_li);
        setTimeout(() => {
            _ul.removeChild(_li);
        }, 3000);
        _name.value = '';
        _email.value = '';
    } else {
        let _li = document.createElement("li");
        _li.classList.add('success');
        _li.appendChild(document.createTextNode(`Success`));
        _ul.appendChild(_li);
        list.push({
            Name: _name.value,
            email: _email.value
        });
        _name.value = '';
        _email.value = '';
        setTimeout(() => {
            _ul.removeChild(_li);
        }, 3000);
    }
})