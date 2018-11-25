const advices = [];
const input = document.querySelector('input');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.clean');
const div = document.querySelector('div');
const $showAdvice = document.querySelector('.showAdvice');
const $showOptions = document.querySelector('.showOptions');

const addAdvice = (e) => {
    const advice = input.value;
    e.preventDefault();

    function uwaga() {
        if (input.value.length) {
            advices.push(advice);
            console.log(advices);
            // div.textContent += advice + ', ';
            input.value = '';
        } else {
            alert('nie wpisuj pustej wartości');
        }
    }
    uwaga();
}
showOptions();

function showOptions() {
    div.textContent += advices + ', ';
}

addBtn.addEventListener('click', addAdvice);
$showOptions.addEventListener('click', showOptions);
// resetBtn.addEventListener('click', resetAdvice);
// $showAdvice.addEventListener('click', showAdvice);