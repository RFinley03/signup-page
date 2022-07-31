const _name = document.querySelector("#_name");
const _email = document.querySelector("#_email");
const submit = document.querySelector(".submit");
const _table = document.querySelector("#_table");

_email.addEventListener("focus", () => {
    _email.placeholder = '';
})

_email.addEventListener("blur", () => {
    _email.placeholder = "eg: John_Doe@gmail.com";
})

submit.addEventListener("click", e => {
    e.preventDefault();
    if (_email.value === "" || _name === "") {
        let _tr = document.createElement("tr");
        let _td = document.createElement("td");
        _td.classList.add('alert');
        _td.append(document.createTextNode(`* please enter all text fields`));
        _tr.append(_li);
        _table.append(_tr);
        setTimeout(() => {
            _table.removeChild(_tr);
        }, 3000);
        _name.value = '';
        _email.value = '';
    } else {
        let _li = document.createElement("li");
        _li.appendChild(document.createTextNode(`${_name.value} : ${_email.value}`));
        _ul.appendChild(_li);
        _name.value = '';
        _email.value = '';
    }
})