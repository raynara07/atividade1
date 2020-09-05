
var altura =300;
var largura =50;

$("#campo").keydown(function(evento){

	if (largura >= 1200 && altura >= 600) {
	 alert('Atingiu o Objetivo');
	}
	else {
	  if(evento.which == 38) {
	     largura = largura - 25;
	     $("#cachorro").css("margin-right",largura+'px');
	  	
	  }
	  if(evento.which == 38) {
	  	altura = altura - 30;
	     $("#cachorro").css("margin-top",altura+'px');
	  }
	  if(evento.which == 39) {
	  	largura = largura + 30;
	     $("#cachorro").css("margin-right",largura+'px');
	  	
	  }
	  if(evento.which == 40) {
	  	altura = altura + 30;
	     $("#cachorro").css("margin-top",altura+'px');
	  	
	  }
	}
});