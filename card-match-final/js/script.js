var arrSuit = ['spade', 'club','diamond', 'heart', 'spade', 'club', 'diamond', 'heart',  'spade', 'club', 'diamond', 'heart', 'spade', 'club', 'diamond', 'heart'];

var timeOpen = 700;
var Timeout = 500;
var matchesMade = 0;
var timeClick = 0;
var clickCard2 = 0;
var clickCard1 = 0;
var mousemove = 0;

var ArrayShuffle = function(a) {
  var d, c, b = a.length;

   while (b) {
    c = Math.floor(Math.random() * b);
    d = a[--b];
    a[b] = a[c];
    a[c] = d;
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
               matchesMade = matchesMade+1;
               
          } else {
               clickCard1 = clickCard2;
			         mousemove = 0;
          }
          
          if (matchesMade === 8) {
               
               setTimeout(function(){$('.card').removeClass('cardOut');}, 1000);
               setTimeout(function(){$('.card').animate({opacity:1}, 300).delay(500).animate({opacity:0});}, 1000);
			         setTimeout(function(){$('#cardcontainer').empty().append('<br><br><br><h1>You won!</h1><br><h2>Clicks = '+timeClick+'</h2>');}, 2000);
               setTimeout(function(){$('#NewGame').css('z-index', 2);}, 4000);
              
          }
          
     });
     
}


$(document).ready(function() {
	 $('#NG').click(function(){
          matchesMade = 0;
          timeClick = 0;
          clickCard2 = 0;
          clickCard1 = 0;
          $('#cardcontainer').empty();
          $('#NewGame').css('z-index', -2);
		      startGame();
          gamePlay();
     });
     
});

