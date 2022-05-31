let nome = prompt('Qual o seu nome?')
alert('Bem vindo ao meu currículo ' + nome + '!')

for (let x = 1; x < 10; x++) {
    $('footer').fadeOut('2000').fadeIn('200')
}

function createUser() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/email/create',
        data: JSON.stringify({ emailUser: $('#emailUser').val(), messageUser: $('#messageUser').val() }),
        contentType: 'application/json',
        datatype: 'json',
    })
}

const getEmails = () => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/email',
        contentType: 'application/json',
        datatype: 'json',
        success: function (res) {
            let elements = ''
            for (i of res) {
                elements += `<p class="email${i.id}">${i.emailUser} <button onClick="deleteEmails(${i.id})">Deletar</button></p>`
            }
            $('.emails').html(elements)
            console.log(res)
        },
    })
}

getEmails()

const deleteEmails = (id) => {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3001/email/' + id,
        contentType: 'application/json',
        datatype: 'json',
        success: function (res) {
            $('.email' + id).remove()
        },
    })
}


