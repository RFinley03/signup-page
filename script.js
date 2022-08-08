const myArray = [];
const form = document.querySelector("#js-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const list = document.querySelector("#list");

window.addEventListener("DOMContentLoaded", () => {
    form.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('submit')) {
            if (name.value === '' || email.value === '') {
                const el = document.createElement("li");
                const text = document.createTextNode(`Please Fill out all fields.`);
                el.classList.add('err');
                el.append(text);
                list.appendChild(el);
                setTimeout(() => {
                    list.removeChild(el);
                }, 3000);
            } else {
                const el = document.createElement("li");
                const text = document.createTextNode(`Thank you for your feedback!`);
                //push object to an array
                myArray.push({
                    id: Date.now(),
                    name: `${name.value}`,
                    email: `${email.value}`
                });
                //clear input fields
                name.value = '';
                email.value = '';
                //append li to list element
                el.classList.add('success');
                el.append(text);
                list.appendChild(el);
                setTimeout(() => {
                    list.removeChild(el);
                }, 3000);
            };
        };
    });
});