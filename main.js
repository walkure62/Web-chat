let submit = document.querySelector(".submit_button");

if (submit !== null) {
submit.onclick = 
function () { 
    let login = document.querySelector(".login_button").value;
    if(login == '') { 
        let alert = document.querySelector('[data-alert="true"]').innerHTML =
        `<p class="alert_message">Please, enter email!</p>`;
        return false; 
    }
    localStorage.setItem('login', login); 
}
}

let name = localStorage.getItem('login');
let names = document.querySelectorAll('[data-component="name"]');

for (i = 0; i < names.length; i++) {
    names[i].innerHTML =
    `<p class="name">${name}</p>`;
}