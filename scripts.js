// Cotacao de moedas do dia (hipotetico)
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os elementos do formulario.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');

// Manipulando o input amount para receber somente numeros.
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;

    // replace pega a expressao e procura dentro da expressao o padrao. ele substui pela segunda propiedade da funcao
    amount.value = amount.value.replace(hasCharactersRegex, '');
});

// Capturando o evento de submit(enviar) no formulario
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
    }
};

// Funcao para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add('show-result');
    } catch (error) {
        // remove a classe do footer ocultando ele.
        footer.classList.remove('show-result');

        console.log(error);
        alert('Nao foi possivel converter. Tente novamente mais tarde.');
    }
}
