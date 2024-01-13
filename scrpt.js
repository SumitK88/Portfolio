skill = document.querySelector('#skl');
education = document.querySelector('#edu');
training = document.querySelector('#trg');

skill_div = document.querySelector('.skill');
education_div = document.querySelector('.education');
training_div = document.querySelector('.training');

skill.addEventListener('click', function (e) {
    skill.classList.add('active');
    education.classList.remove('active');
    training.classList.remove('active');

    skill_div.classList.add('activate');
    skill_div.classList.remove('deactivate');
    education_div.classList.add('deactivate');
    training_div.classList.add('deactivate');
});

education.addEventListener('click', function (e) {
    skill.classList.remove('active');
    education.classList.add('active');
    training.classList.remove('active');

    skill_div.classList.add('deactivate');
    education_div.classList.add('activate');
    education_div.classList.remove('deactivate');
    training_div.classList.add('deactivate');
});

training.addEventListener('click', function (e) {
    skill.classList.remove('active');
    education.classList.remove('active');
    training.classList.add('active');

    skill_div.classList.add('deactivate');
    education_div.classList.add('deactivate');
    training_div.classList.add('activate');
    training_div.classList.remove('deactivate');
});