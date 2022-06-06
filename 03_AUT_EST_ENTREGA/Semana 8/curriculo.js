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
                elements += `<p class="email${i.id}">${i.emailUser} <button onClick="deleteEmails(${i.id})">Deletar</button><button onClick="createInput(${i.id})">Editar</button></p>`
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

const editEmails = (id) => {

    $.ajax({
        type: 'PATCH',
        url: 'http://localhost:3001/email/' + id,
        contentType: 'application/json',
        datatype: 'json',
        data: JSON.stringify({ emailUser: $('#newEmail').val()}),
        success: function (res) {
            btnRemove()
            getEmails()
        }
    })
}

const btnRemove = () => {
    $('#newEmail').remove()
    $('#btnNewEmail').remove()
}

const createInput = (id) => {
    let input = `<input type='text' id='newEmail'><button id='btnNewEmail' onClick='editEmails(${id})' type="button">Salvar</button>`
    $('.email' + id).append(input)
}


