function calcular() {

    //pega valores inseridos, e substitui virgula por ponto
    var nome = document.getElementById('nome').value.replace(/,/g, '.');;
    var peso = document.getElementById('peso').value.replace(/,/g, '.');;
    var altura = document.getElementById('altura').value.replace(/,/g, '.');;
  
    // valida se os campos não estão vazios
    if (peso == '' || altura == '') {
      document.getElementById("message").innerHTML = 'preencha os campos';
      return false;
    }
  
    // calcula IMC
    var resultado = (peso / (altura ** 2));
    var message = '';
  
    // verifica situação
    if (resultado < 17) {
      message = 'Você está muito abaixo do peso';
    } else if (resultado >= 17 && resultado <= 18.49) {
      message = 'Você está abaixo do peso';
    } else if (resultado >= 18.5 && resultado <= 24.99) {
      message = 'Seu peso está normal';
    } else if (resultado >= 25 && resultado <= 29.99) {
      message = 'Você está acima do peso';
    } else if (resultado >= 30 && resultado <= 34.99) {
      message = 'Você tem obesidade nível I';
    } else if (resultado >= 35 && resultado <= 39.99) {
      message = 'Você tem Obesidade nível II';
    } else if (resultado >= 40) {
      message = 'Você tem Obesidade nível III';
    }
  
    // mostra resultado

    resultado = resultado.toFixed(2).replace(/\./g, ',');


    document.getElementById("message").innerHTML = 'Olá ' + nome + '!' + '&nbsp' +'Como' + '&nbsp' + peso + 'kg' + '&nbsp' + 'e' + '&nbsp' + altura + 'm' + '<br>'+' O seu IMC é' + '&nbsp' + resultado + '<br>' + message;
  }
