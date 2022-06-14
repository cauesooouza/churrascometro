// carne - 400 gr por pessoa (se + de 6 horas) 650 gr
// cerveja - 1200 ml por pessoa (se + de 6 horas) - 2000 ml
// refrigerante/agua - 1000 ml por pessoa (se + de 6 horas) 1500ml
// crianças valem por 0,5

function churrascometro() {
    let adultos = document.querySelector('input[name="adultos"]').value;
    let crianca = document.querySelector('input[name="crianca"]').value;
    let duracao = document.querySelector('input[name="duracao"]').value;
    let resultado = document.querySelector("#resultado");
    let carne = 400;
    let alcool = 1200;
    let nalcool = 1000;
    crianca = crianca / 2;

    function calcular() {
        if (duracao >= 6) {
            carne = 650;
            alcool = 2000;
            nalcool = 1500;
        }
        if (adultos == 0 || duracao == 0) {
            resultado.innerHTML = `Por favor preencher os campos`
        } else {
            carne = carne * adultos + (carne * crianca);
            alcool = alcool * adultos;
            nalcool = nalcool * adultos + (nalcool * crianca);
            resultado.innerHTML = `Você vai precisar de: <p>${carne}KG de carne</p> <p>${alcool}ml de alcool<p> <p>${nalcool}ml não alcoolico</p>`
        }
    }
    calcular()
}