var arrSuit = ['diamond', 'heart', 'club', 'spade'];

var timeOpen = 700;
var Timeout = 2000;
var matches = 0;
var timeClick = 0;
var clickCard1 = 0;
var clickCard2 = 0;
var mousemove = 0;

var ArrayShuffle = function(a) {
	var d, c, b = a.length;

	while (b){
		c = Math.floor(Math.random() *b);
		d = a[--b];
		a[b] = a[c];
	}
	return a;
}

var startGame = function() {

	ArrayShuffle(arrSuit);

	for(i=0; i<16; i++) {
		$('#cardcontainer').append('<div class="card ' + arrSuit[i] + '">' + '</div>');
	}

	setTimeout(function() {
		$('.card').addClass('cardOut');
		$('.layer').css('z-index', -1);
	}, Timeout);
}

var gamePlay = function() {
	$('.card').click(function(){
		timeClick++;
		$(this).removeClass('cardOut').delay(timeOpen).queue(function () {$(this).addClass('cardOut');$(this).dequeue();
	});

	$(this).mouseleave(function(){
		mousemove++;
	});
		clickCard2 = $(this).attr('class');

		if (clickCard1 === clickCard2&&mousemove>0) {
			$('.'+clickCard2.substr(5)).animate({opacity:0}, 200);
			mousemove = 0;
			clickCard1 = 0;
			matches = matches+1;
		} else {
			clickCard1 = clickCard2;
			mousemove = 0;
		}

		if (matches === 8) {

			setTimeout(function(){$('.card').removeClass('cardOut');}, 1000);
            setTimeout(function(){$('.card').animate({opacity:1}, 300).delay(500).animate({opacity:0});}, 1000);
			setTimeout(function(){$('#cardcontainer').empty().append('<br><br><br><h1>You won!</h1><br><h2>Clicks = '+timeClick+'</h2>');}, 2000);
            setTimeout(function(){$('#NewGame').css('z-index', 2);}, 4000);
		}

	});

}

(document).ready(function() {
	
      $('#1').click(function(){Timeout = 1000;});
      $('#2').click(function(){Timeout = 2000;});
      $('#3').click(function(){Timeout = 3000;});
      $('#NG').click(function(){
          matches = 0;
          timeClick = 0;
          clickCard1 = 0;
          clickCard2 = 0;
          $('#cardcontainer').empty();
          $('#NewGame').css('z-index', -2);
		      startGame();
          gamePlay();
     });
     
});





