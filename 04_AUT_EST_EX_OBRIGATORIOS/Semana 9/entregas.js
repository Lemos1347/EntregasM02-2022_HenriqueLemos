function onlynumber(evt) {
    var theEvent = evt || window.event
    var key = theEvent.keyCode || theEvent.which
    key = String.fromCharCode(key)
    var regex = /^[0-9.]+$/
    if (!regex.test(key)) {
        theEvent.returnValue = false
        if (theEvent.preventDefault) theEvent.preventDefault()
    }
}

const verify = () => {
    let number = $('#number').val()
    let calculo = Number(number[0]) % 2
    console.log(calculo)
    if (calculo == 0) {
        $('#saida').html(`<p>O número na casa da centena é par!</p>`)
    } else {
        $('#saida').html(`<p>O número na casa da centena é ímpar!</p>`)
    }
}

const calcular = () => {
    let number = $('#price').val()
    let soma = 0
    for (i of number) {
        soma += Number(i)
    }
    $('#saida').html(`<p>A soma dos dígitos é ${soma}</p>`)
}

const ordem = () => {
    let arrayNomes = []
    arrayNomes.push($('#nome1').val())
    arrayNomes.push($('#nome2').val())
    arrayNomes.push($('#nome3').val())
    arrayNomes.sort()
    $('#saida').html(`<p>Os nomes em ordem alfabética é ${arrayNomes[0]}, ${arrayNomes[1]}, ${arrayNomes[2]}</p>`)
}

const fibonacci = (num) => {
    let arrayNums = [0, 1]
    let soma = 0
    while (arrayNums.length < Number(num)) {
        soma = arrayNums[arrayNums.length - 1] + arrayNums[arrayNums.length - 2]
        arrayNums.push(soma)
    }
    $('#saida').html(`<p>A ordem de fibonacci até o número ${num} é: ${arrayNums}</p>`)
}

const primos = (num1, num2) => {
    let number1 = 0
    let number2 = 0
    let interval = []
    let primos = []
    let trava = true
    if (Number(num1) > Number(num2)) {
        number1 = Number(num2)
        number2 = Number(num1)
    } else {
        number1 = Number(num1)
        number2 = Number(num2)
    }
    interval.push(number1)
    while (interval.length < number2) {
        let i = interval[interval.length - 1]
        console.log(i)
        for (let j = 2 ; j < i ; j++){
            trava = true
            if (i % j == 0) {
                trava = false 
                break
            }
        }
        if (trava == true) {
            primos.push(i)
        }
        i++
        interval.push(i)
    }
    $("#saida").html(`<p>Os números primos nesse intervalo são: ${primos}</p>`)
}
