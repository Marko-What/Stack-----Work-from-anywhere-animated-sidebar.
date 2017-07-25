

		function roundLaser(){
			$('.left').animate({"height" : "100%", "width" : "1px"},150, function(){
					$('.bottom').animate({"width" : "239px", "height" : "1px"},90, function(){
						$('.right').animate({"height" : "100%", "width" : "1px"},150, function(){
							$('.top').animate({"width" : "100%", "height" : "1px"},150, function(){
							$('.left, .right').animate({"height" : "0px", "width" : "2px"},30);
							$('.bottom').animate({"height" : "2px", "width" : "0px"},30);
							$('.top').animate({"height" : "2px", "width" : "0px"},30);
							
						});
								
					});	
				});
			});	
		} /*end of roundLaser*/	

setInterval(roundLaser, 5500);


	function tipp(){ 
		$('div#rotolando').unbind();	
		  /* ... binding event ...*/	

		function round(){
		
		$('.linee3').addClass('color');
		function joj2(){
		$('.linee2').addClass('color');
		}
		function joj3(){
		$('.linee1').addClass('color');
		}
		function remove1(){
			$('.linee3, .linee2, .linee1').removeClass('color');
		/*$('div#rotolando').bind('click', tipp);	*/
		}
		setTimeout(joj2, 150);
		setTimeout(joj3, 300);
		setTimeout(remove1, 450);
	
		}/*end of round*/
		setTimeout(round, 0);	
		setTimeout(round, 500);
		setTimeout(bindIt, 1700);
		function bindIt(){
			$('div#rotolando').bind('click', tipp);	
		}

		}/*end of tipp*/

		$('div#rotolando').bind('click', tipp);
	$('div#jobWrap.remote').mouseenter(function(){
		$('div#rotolando').trigger('click');
		}
	); /*end of MouseEnter */

	


