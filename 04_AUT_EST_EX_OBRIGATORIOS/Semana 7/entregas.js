const somar = () => {
    let valor = Number($('#productPrice').val()) 
    valor ++
    $('#productPrice').val(valor)
}

const subtrair = () => {
    let valor = Number($('#productPrice').val()) 
    valor --
    $('#productPrice').val(valor)
}

const trocar = () => {
    let nome1 = $('#nome1').val();
    let nome2 = $('#nome2').val();

    $('#nome1').val(nome2);
    $('#nome2').val(nome1);
}

const verifyPhone = () =>{
    var regExp = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
    var telefone = $('#phoneNum').val();
    var resultado = regExp.test(telefone);
    if (resultado == true){
        alert(`Esse número tem um padrão correto`)
    }
    else{
        alert(`Esse número não está no padrão correto`)
    }
}

const calculoPassagem = () =>{
    let num = parseFloat($('#num').val());
    let select = $('select').val();
    let saida = 0;

    if (select = 'diurno'){
        if (num > 50){
            saida = (num*200)*0.6
        }
        else {
            saida = (num*200)
        }
    }
    else {
        if (num > 50){
            saida = (num*100)*0.8
        }
        else {
            saida = (num*100)
        }
    }

    $('#saida').html(`<br>O valor total da compra é de ${saida}`)
    
}

let count = 1
const adicionarEspaco = () =>{
    count++

    $('#campo').append(`<li>
    <input id="numAluno${count}" placeholder="nome aluno">
    <input id="prova${count}" placeholder="nota prova">
    <input id="trabalho${count}" placeholder="nota trabalho">
    <span class="saida" id="saida${count}"></span><br>
</li>`)
}
const calculoAluno = () => {
    let totalAlunos = $('#numAlunos').val()
    let mediaGeral = 0
    let contagemMediaGeral = 0
    let mediaGeralProva = 0
    let contagemMediaProva = 0
    let contagemTrabalho = 0
    let mediaTrabalho = 0
    let todasNotas = []
    let todosTrabalhos = []
    let maiorProva = 0
    let menorProva = 0
    let maiorTrabalho = 0
    let menorTrabalho = 0
    for (let i = 1; i <= totalAlunos ; i++ ){
        let mediaAluno = 0
        mediaAluno = ((parseFloat($(`#prova${i}`).val())*2) + (parseFloat($(`#trabalho${i}`).val())*3))/5
        $(`#saida${i}`).html(`<span>A média desse aluno é ${mediaAluno}</span>`)

        contagemMediaProva += parseFloat($(`#prova${i}`).val()) 

        contagemMediaGeral += (parseFloat($(`#prova${i}`).val()) + parseFloat($(`#trabalho${i}`).val()))

        contagemTrabalho += parseFloat($(`#trabalho${i}`).val())

        todasNotas.push(parseFloat($(`#prova${i}`).val()))
        todosTrabalhos.push(parseFloat($(`#trabalho${i}`).val()))
    }

    todasNotas.sort(function(a,b){
        return a - b 
    })
    todosTrabalhos.sort(function(a,b){
        return a - b 
    })

    mediaGeral = contagemMediaGeral/totalAlunos
    mediaGeralProva = contagemMediaProva/totalAlunos
    mediaTrabalho = contagemTrabalho/totalAlunos
    maiorProva = todasNotas[todasNotas.length - 1]
    menorProva = todasNotas[0]
    maiorTrabalho = todosTrabalhos[todosTrabalhos.length - 1]
    menorTrabalho = todosTrabalhos[0]

    $('#saida').html(`A média total dos alunos é ${mediaGeral} ; A média total das provas é ${mediaGeral} ; A média total dos trabalhos é ${mediaTrabalho}<br><br>Maior nota de prova foi ${maiorProva} e a menor nota de prova foi ${menorProva}<br><br>Maior nota de trabalho foi ${maiorTrabalho} e a menor nota de trabalho foi ${menorTrabalho}`)

}