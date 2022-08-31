let f1 = document.forms.f1;
let profile = document.querySelector('.profile');
let image = document.querySelector('.image')
let profileName = document.querySelector('.name');
let profileEmail = document.querySelector('.email');
let profilePosition = document.querySelector('.position');

function signIn() {
    if (f1.agree.checked) {
        f1.style.display = 'none';
        profile.style.display = 'flex';
        if (f1.gender.value == 'man') {
            image.style.backgroundImage = 'url(images/man.png)'
        }
        if (f1.gender.value == 'woman') {
            image.style.backgroundImage = 'url(images/woman.png)'
        }
        profileName.textContent = `${f1.name.value} ${f1.surname.value}`;
        profileEmail.textContent = f1.email.value;
        if (!f1.position.options[0].selected) {
            profilePosition.textContent = f1.position.value;
        }
        if (f1.position.options[0].selected) {
            profilePosition.textContent = '';
        }

    }
}

function signOut() {
    f1.style.display = 'flex';
    profile.style.display = 'none';
    f1.reset();
}