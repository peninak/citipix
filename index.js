/*declare variable to store user input*/
var city; 

$('document').ready(
	/*declare and implement event handler*/
	$('form').on('submit', function(event) {
		/*prevent default form submission*/
		event.preventDefault(); 
		/*call function to update background*/
		updatePix();
		/*reset class so that function can be run again*/
		$('body').addClass('');
	})
);

	/*function to update the background based on user input*/
	function updatePix() {
		/*grab user input*/
		city = $('#city-type').val();
		if(city === 'NYC' || city ==='nyc' || city === 'New York' || city === 'New York City') {
			$('body').addClass('nyc')
			$('#city-type').val('');
		} else if (city === 'San Francisco' || city === 'SF' || city === 'sf' || city === 'Bay Area') {
			$('body').addClass('sf')
			$('#city-type').val('');
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'la' || city === 'LAX') {
			$('body').addClass('la');
			$('#city-type').val('');
		} else if (city === 'Austin' || city === 'ATX' || city === 'atx') {
			$('body').addClass('austin')
			$('#city-type').val('');
		} else if (city === 'Sydney' || city === 'SYD' || city === 'syd') {
			$('body').addClass('sydney')
			$('#city-type').val('');
		} else {
		/*for all unsupported cases*/
			window.alert('Sorry, that does not appear to be a valid input');
		}
	};	