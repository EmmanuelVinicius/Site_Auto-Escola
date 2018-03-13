$(".scrollSuave").click(function(){        
	$('html,body').animate({
		scrollTop:$(this.hash).offset().top},
		1000);
});

function initMap() {
	var uluru = {lat: -19.9968833, lng: -44.0079496};
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: uluru});
	var marker = new google.maps.Marker({position: uluru,map: map});
}


function borda(){
	var x = document.getElementsByClassName('entrada');
	var msg = document.getElementById('msgFinal');
	var count = 0;
	for (var i = x.length - 1; i >= 0; i--) {
		if (x[i].value == '') {
			x[i].style.borderColor = 'red';
			count++;
		}else{
			x[i].style.borderColor = '#464308';		
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
$('.entrada').keydown(function() {
	$(this).css("font-style", "normal")
});
function fonte() {
	for (var i = entrada.length - 1; i >= 0; i--) {
		entrada[i].style.fontStyle = 'normal'
	}
}

var input    = document.getElementById('file'),
    fileName = document.getElementById('resposta');

input.addEventListener('change', function(){
	fileName.textContent = this.value;
});

