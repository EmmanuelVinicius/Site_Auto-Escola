$(".scrollSuave").click(function(){        
	$('html,body').animate({
		scrollTop:$(this.hash).offset().top}, 2000);
});

function initMap() {
	var uluru = {lat: -19.9968833, lng: -44.0079496},
	map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: uluru}),
	marker = new google.maps.Marker({position: uluru,map: map});
}



$("#primH").click(function(){
	$("#texto").toggle(1000);
	$("#texto").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt architecto culpa magnam eos expedita tempora. Officiis corporis sit adipisci iste, consectetur! Rem eveniet temporibus impedit. Illo veritatis rem debitis dicta? ipsum dolor sit amet, consectetur a");
});
$("#incC").click(function(){
	$("#texto").toggle(1000);
	$("#texto").text("dipisicing elit. Iste earum perspiciatis eveniet vel blanditiis voluptas optio et, dolores inventore delectus excepturi, illum molestias error libero nulla cumque tempore aliquid magnam. ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quisquam ex vel, off");
});
$("#recic").click(function(){
	$("#texto").toggle(1000);
	$("#texto").text("ime error quae quod nobis animi ea. ipsum dolor sit amet, consectetur adipisicing elit. Debitis nulla perferendis ex voluptate assumenda, minus molestias dolorum laudantium dolores excepturi mollitia sit soluta unde cum quae labore corrupti alias expedita? i");
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

var input = document.getElementById('file'),
fileName = document.getElementById('resposta');

input.addEventListener('change', function(){
	fileName.textContent = this.value;
});

