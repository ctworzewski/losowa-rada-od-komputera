const options = ['walcz', '"weź, nie pytaj"', 'poddaj się'];

const input = document.querySelector('input');
const add = document.querySelector('.add');
const clean = document.querySelector('.clean');
const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionsBtn = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');

const addOption = (e) => {
    e.preventDefault();
    options.push(input.value);
    input.value = '';
}

const showAdvice = () => {
    // Math.random() * options.length;
    // console.log(Math.floor(Math.random() * options.length));
    const index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];
}

const showOptions = () => {
    console.log(options);
    alert(options.join(', '));
}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
}

add.addEventListener('click', addOption);
clean.addEventListener('click', resetOptions);
showOptionsBtn.addEventListener('click', showOptions);
showAdviceBtn.addEventListener('click', showAdvice);