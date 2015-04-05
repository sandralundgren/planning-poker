$( document ).ready(function()  {

	$('.cards').click(function() {

		$('.theButtons').fadeIn();

		document.getElementById('phaseTitle').innerHTML = "<h2>2. Waiting Phase</h2>";

  		// alert(this.id); // alerts the id of the one that is clicked on

        var cardClicked = "idNumber"; // initializing the variable with dummy content

        cardClicked = this.id; // gets the id of the card that is clicked on

  		$('.cards').slideUp("fast"); // Slide up all the cards

  		$('#' + cardClicked).fadeIn("fast"); // Fade back in only the one that was clicked on


        // Reveal card button listener

		$('#revealCard').click(function () {

			document.getElementById('phaseTitle').innerHTML = "<h2>3. Revealing Phase</h2>";

			// swap the card image front/back 

			if ($('#' + cardClicked).attr("src") === "images/cardback.jpg") {

				$('#' + cardClicked).attr("src", "images/frontcard" + cardClicked + ".jpg");

			} else {

				$('#' + cardClicked).attr("src", "images/cardback.jpg");
			}
			
		});


		// Reset button listener. Whenever the Start over button is clicked on, all the cards fade back in.

		$('#startOver').click(function () {

			$('.theButtons').fadeOut("fast");

			$('.cards').fadeIn("fast"); 

			// i also need to toggle whatever card was revealed back to cardback state!

			if ($('#' + cardClicked).attr("src") === "images/frontcard" + cardClicked + ".jpg") {

					$('#' + cardClicked).attr("src", "images/cardback.jpg");

				}

			document.getElementById('phaseTitle').innerHTML = "<h2>1. Select Phase</h2>";


		});




	}); // card click





});


