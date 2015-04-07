$(document).ready(function() {

	$('.cards').click(function() {

		$('#intro').hide();

	    var cardClicked = "idNumber"; // initializing the variable with dummy content

        cardClicked = this.id; // gets the id of the card that is clicked on

        var _this = $(this);

        $('.cards').not(_this).slideUp("fast"); // slide up all of the cards except the one clicked on

		$('.theButtons').fadeIn();

		document.getElementById('phaseTitle').innerHTML = "<h2>Waiting Phase</h2>";


		 // Reveal card button listener

		$('#revealCard').click(function() {

			document.getElementById('phaseTitle').innerHTML = "<h2>Revealing Phase</h2>";

			// swap the card image front/back 

			if ($('#' + cardClicked).attr("src") === "images/cardback.jpg") {

				$('#' + cardClicked).attr("src", "images/frontcard" + cardClicked + ".jpg");

			} 
			
		});


		// Reset button listener. Whenever the "Start Over" button is clicked on, all the cards fade back in.

		$('#startOver').click(function() {

			$('.theButtons').fadeOut("fast");

			$('.cards').fadeIn("fast"); 

			// Toggles whatever card was revealed back to cardback state

			if ($('#' + cardClicked).attr("src") === "images/frontcard" + cardClicked + ".jpg") {

					$('#' + cardClicked).attr("src", "images/cardback.jpg");

				}

			document.getElementById('phaseTitle').innerHTML = "<h2>Select Phase</h2>";

		});

	}); 

});
