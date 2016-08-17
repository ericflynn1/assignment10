function createProfile() {
    let profpics = ['ein', 'zwei', 'drei', 'vier', 'funf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwolf', 'dreizehn', 'vierzehn', 'funfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn', 'zwanzig'];
    let chosen = Math.floor(Math.random() * profpics.length);



    let next = document.createElement('div');
    next.classList.add('block');
    next.classList.add(profpics[chosen]);
    next.addEventListener('click', function () {
        next.classList.add('hidden');
    });
    let container = document.createElement('div');
    container.classList.add('person');
    container.classList.add('block');
    let name = document.createElement('h2');
    name.textContent = 'Yolanda';
    name.addEventListener('click', function (){
        console.log('CLICKED ON YA');
    });
    let yup = document.createElement('button');
    yup.textContent = 'Yup';
    yup.addEventListener('click', function (){
        console.log('You like YOLANDA');
        overall.classList.add('otherclass');
    });
    let nope = document.createElement('button');
    nope.textContent = 'Eww, nope';
    nope.addEventListener('click', function (){
        console.log('YOLANDA has been noped');
       overall.classList.add('opaque');
        
    });
    container.appendChild(name);
    container.appendChild(yup);
    container.appendChild(nope);
    let parent = document.querySelector('body');
    parent.appendChild(next);
    parent.appendChild(container);
}

window.addEventListener('load', function () {
    for (let i = 0; i < 1; i++) {
        createProfile();
    }
    setInterval(createProfile, 100000000);
});
