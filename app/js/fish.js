$(document).ready(function() {
	function animateFish() {
					$(".fish").each(function() {
									$(this).css('right', Math.random()*-1000);
									$(this).animate({right: $(document).width()}, Math.random()*500 + 4000, "linear", animateFish).delay(Math.random()*1000);
					});
	}
  animateFish();
});
