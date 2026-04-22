// Obtendo os elementos do formulario.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

// Manipulando o input amount para receber somente numeros.
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;

    // replace pega a expressao e procura dentro da expressao o padrao. ele substui pela segunda propiedade da funcao
    amount.value = amount.value.replace(hasCharactersRegex, '');
});

// Capturando o evento de submit(enviar) no formulario
form.onsubmit = (event) => {
    event.preventDefault();

    console.log(currency.value);
};
