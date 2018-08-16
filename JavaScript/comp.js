function initMap() {
	var uluru = { lat: -19.9968782, lng: -44.0090332 },
	map = new google.maps.Map(document.getElementById('map'), { zoom: 17, center: uluru }),
	marker = new google.maps.Marker({ position: uluru, map: map });
}


$(".scrollSuave").click(function () {
	$('html,body').animate({
		scrollTop: $(this.hash).offset().top
	}, 1000);
});

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

var $target = $('.anime'),
animationClass = 'anime-init',
windowHeight = $(window).height(),
offset = windowHeight - (windowHeight / 4);

function animeScroll() {
	var topo = $(document).scrollTop();
	$target.each(function () {
		if (topo > boxTop(this) - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	});
}

$(document).scroll(function () {
	animeScroll();
});

$("#primH").click(function () {
	if(window.outerWidth < 767.98){
		$(this).attr({
			class: "scrollSuave",
			href: "#texto"
		});
	}
	$("#texto").hide("fast");
	$("#texto").html(" Os pré-requisitos necessários para iniciar o processo de obtenção da Permissão para Dirigir (PPD), são:<br> 	-	Ser penalmente imputável (ter 18 anos completos);<br>	-	Saber ler e escrever;<br>	-	Possuir documento de identidade ou equivalente; <br>	-	Possuir Cadastro de Pessoa Física (CPF); <br>	-	Possuir comprovante de residência. <br>");
	$("#texto").show(1000);
});
$("#incC").click(function () {
	if(window.outerWidth < 767.98){
		$(this).attr({
			class: "scrollSuave",
			href: "#texto"
		});
	}
	$("#texto").hide("fast");
	$("#texto").html("O condutor deverá fazer a solicitação pelo Centro de formação de Condutores (CFC) ou nas unidades de atendimento. Após os procedimentos, o condutor deverá ");
	$("#texto").show(1000);
});
$("#recic").click(function () {
	if(window.outerWidth < 767.98){
		$(this).attr({
			class: "scrollSuave",
			href: "#texto"
		});
	}
	$("#texto").hide("fast");
	$("#texto").html("Esses itens só podem ser concedidos aos motofretistas e mototaxistas após a frequência ao curso obrigatório regulamentado por norma do Departamento Nacional de Trânsito (Denatran).");
	$("#texto").show(1000);
});

$('.entrada').keydown(function () {
	$(this).css("font-style", "normal")
});

function borda() {
	var x = document.getElementsByClassName('entrada'),
	msg = document.getElementById('msgFinal'),
	count = 0;
	for (var i = 0; i <= x.length; i++) {
		if (x[i].value == '') {
			x[i].style.borderColor = 'red';
			count++;
		} else {
			x[i].style.borderColor = '#241E4E';
		}

		if (count != 0) {
			$(msg).text('Preencha todos os campos!');
			$(msg).removeClass('msgSuccess');
			$(msg).addClass('msgFailure');
		} else {
			$(msg).text('Mensagem enviada!');
			$(msg).removeClass('msgFailure');
			$(msg).addClass('msgSuccess');
		}
	}
}
