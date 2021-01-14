'use strict';

function bt2019(){
            container02.style.display="";
            container03.style.display="none";
};
function bt2018(){
            container02.style.display="none";
            container03.style.display="";
};

$(document).ready(function(){
		$('.button3').each(function(index){
			$(this).attr('button-index', index);
		}).click(function(){
			var index = $(this).attr('button-index');
			$('.button3[button-index=' + index + ']').addClass('clicked_button3');
			$('.button3[button-index!=' + index + ']').removeClass('clicked_button3');
		});


	});


$(document).ready(function() {

// ライトボックス
  lightbox.option({
    'albumLabel': "%1 / %2",
    'disableScrolling': true,
  });

  // テキストの表示・非表示
  $('.js-more').on('click', function() {
    $(this).next().toggleClass('hidden');
  });
    
});


$(document).ready(function(){

    document.getElementById("roulette").innerHTML='<object type="text/html" class="roulette" data="images/school/2019/roulette/index.html"></object>';

})