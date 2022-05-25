let nome = prompt("Qual o seu nome?");
alert("Bem vindo ao meu currículo " + nome + "!")

for(let x = 1 ; x < 10 ; x ++){
    $("footer").fadeOut("2000").fadeIn("200")
}


function createUser() {
    $.post("http://localhost:3001/userEmail",
    {"emailUser" : $("#emailUser").val(), 
    "messageUser" : $("#messageUser").val()}
    , function(msg){
        console.log(msg)
    })
   };