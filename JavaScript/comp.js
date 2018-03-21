function initMap() {
	var uluru = {lat: -19.9968833, lng: -44.0079496},
	map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: uluru}),
	marker = new google.maps.Marker({position: uluru,map: map});
}

$(".scrollSuave").click(function(){        
	$('html,body').animate({
		scrollTop:$(this.hash).offset().top}, 1000);
});

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $('.anime'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var topo = $(document).scrollTop();
    $target.each(function() {
      if (topo > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});

$("#primH").click(function(){
	$("#texto").hide("fast");
	$("#texto").text(" Os pré-requisitos necessários para iniciar o processo de obtenção da Permissão para Dirigir (PPD), são:\n 	-	Ser penalmente imputável (ter 18 anos completos);\n	-	Saber ler e escrever;\n	-	Possuir documento de identidade ou equivalente; \n	-	Possuir Cadastro de Pessoa Física (CPF); \n	-	Possuir comprovante de residência. \n");
	$("#texto").show(1000);
});
$("#incC").click(function(){
	$("#texto").hide("fast");
	$("#texto").text("O condutor deverá fazer a solicitação pelo Centro de formação de Condutores (CFC) ou nas unidades de atendimento. Após os procedimentos, o condutor deverá ");
	$("#texto").show(1000);
});
$("#recic").click(function(){
	$("#texto").hide("fast");
	$("#texto").text("Esses itens só podem ser concedidos aos motofretistas e mototaxistas após a frequência ao curso obrigatório regulamentado por norma do Departamento Nacional de Trânsito (Denatran).");
	$("#texto").show(1000);
});

$('.entrada').keydown(function() {
	$(this).css("font-style", "normal")
});

var input = document.getElementById('file'),
fileName = document.getElementById('resposta');

input.addEventListener('change', function(){
	fileName.textContent = this.value;
});

function borda(){
	var x = document.getElementsByClassName('entrada'),
	msg = document.getElementById('msgFinal'),
	count = 0;
	for (var i = x.length - 1; i >= 0; i--) {
		if (x[i].value == '') {
			x[i].style.borderColor = 'red';
			count++;
		}else{
			x[i].style.borderColor = '#241E4E';		
		}

		if(count != 0){
			$(msg).text('Envie os dados corretamente!');
			$(msg).removeClass('msgSuccess');
			$(msg).addClass('msgFailure');
		}else{
			$(msg).text('Dados enviados!');
			$(msg).removeClass('msgFailure');
			$(msg).addClass('msgSuccess');
		}
	}
}
