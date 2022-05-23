function calcular() {
    var a = parseFloat(document.getElementById('numberOne').value);
    var b = parseFloat(document.getElementById('numberTwo').value);
    let resultado;
    let saida;
    var iden = document.getElementById('option').value.toString();
    if (iden == 'soma') {
        resultado = a + b
        saida = 'Sua operação é: ' + a + ' + ' + b + ' = ' + resultado
    }
    if (iden == 'subtracao') {
        resultado = a - b
        saida = 'Sua operação é: ' + a + ' - ' + b + ' = ' + resultado
    }
    if (iden == 'divisao') {
        resultado = a / b
        saida = 'Sua operação é: ' + a + ' / ' + b + ' = ' + resultado
    }
    if (iden == 'multiplicacao') {
        resultado = a * b
        saida = 'Sua operação é: ' + a + ' x ' + b + ' = ' + resultado
    }
    if (iden == 'resto') {
        resultado = a % b
        saida = 'Sua operação é: ' + a + ' % ' + b + ' = ' + resultado
    }
    if (iden == 'inteiro') {
        resultado = Math.floor(a / b)
        saida = 'Sua operação é: ' + a + ' // ' + b + ' = ' + resultado
    }
    alert(saida);
}

function notas() {
    let produto = parseFloat(document.getElementById('productPrice').value);
    let notasCem = 0;
    let notasCinquenta = 0;
    let notasVinte = 0;
    let notasDez = 0;
    let notasCinco = 0;
    let notasDois = 0;
    let notasUm = 0;

    for (let x = 100; x > 0; x--) {
        if (x == 1 || x == 2 || x == 5 || x == 10 || x == 20 || x == 50 || x == 100) {
            if (x == 100) {
                notasCem = parseInt(produto / 100)
                if (produto > 100) {
                    produto = produto - notasCem * 100
                }
            }
            if (x == 50) {
                notasCinquenta = parseInt(produto / 50)
                if (produto > 50) {
                    produto = produto - notasCinquenta * 50
                }
            }
            if (x == 20) {
                notasVinte = parseInt(produto / 20)
                if (produto > 20) {
                    produto = produto - notasVinte * 20
                }
            }
            if (x == 10) {
                notasDez = parseInt(produto / 10)
                if (produto > 10) {
                    produto = produto - notasDez * 10
                }
            }
            if (x == 5) {
                notasCinco = parseInt(produto / 5)
                if (produto > 5) {
                    produto = produto - notasCinco * 5
                }
            }
            if (x == 2) {
                notasDois = parseInt(produto / 2)
                if (produto > 2) {
                    produto = produto - notasDois * 2
                }
            } else {
                notasUm = parseInt(produto / 1)
            }
        }
    }

    alert(
        'Você precisará de: ' +
            notasCem +
            ' notas de 100' +
            ' +' +
            notasCinquenta +
            ' notas de 50' +
            ' +' +
            notasVinte +
            ' notas de 20' +
            ' +' +
            notasDez +
            ' notas de 10' +
            ' +' +
            notasCinco +
            ' notas de 5' +
            ' +' +
            notasDois +
            ' notas de 2' +
            ' +' +
            notasUm +
            ' notas de 1'
    );
}

function lista() {
    let lista = document.getElementById('lista').value;
    let arrayLista = lista.split(' ');
    let numeroFoco = parseFloat(document.getElementById('numeroFoco').value);
    let index = 0;

    for (let i = 0; i < arrayLista.length; i++) {
        arrayLista[i] = Number(arrayLista[i])
    }

    arrayLista.sort(function (a, b) {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })

    index = arrayLista.indexOf(numeroFoco) + 1;

    document.getElementById('listaNova').innerHTML = arrayLista;
    document.getElementById('posicao').innerHTML = `O número ${numeroFoco} é o número ${index} da sua lista`;
}
