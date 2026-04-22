const amount = document.getElementById('amount');

// Manipulando o input amount para receber somente numeros.
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;

    // replace pega a expressao e procura dentro da expressao o padrao. ele substui pela segunda propiedade da funcao
    amount.value = amount.value.replace(hasCharactersRegex, '');
});
