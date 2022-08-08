const myArray = [];
const form = document.querySelector("#js-form");
const name = document.querySelector("#_name");
const email = document.querySelector("#_email");
const list = document.querySelector("#_list");

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
                myArray.push({
                    id: Date.now(),
                    name: `${name.value}`,
                    email: `${email.value}`
                });

                name.value = '';
                email.value = '';

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