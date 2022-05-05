
function alturaMaxima(){
    var velocidadeInicial = document.getElementById("velocidadeInicial").value;
  const g = 10;
  let tempoTrajetoria;
  let hmax
  if (velocidadeInicial >= 0){
    tempoTrajetoria = velocidadeInicial/g
    hmax = velocidadeInicial**2/(2*g)
  }
  else{
    alert("Números inválidos");
  }
  return alert("Tempo da trajetória: " + tempoTrajetoria + " segundos" + " ; " + "Altura Máxima: " + hmax + " metros")
}

