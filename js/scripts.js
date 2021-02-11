$('.flag').on('click', function() {
	// retrieve and display city skyline
	var skylineUrl = $(this).attr('city-skyline')
  // log skyline to console
  console.log(skylineUrl)

	var cityname = $(this).attr('city-text')

  $('#city-skyline').empty()

  $('#city-skyline').css('background-image', `url(${skylineUrl})`)
})

$("#philly").click(function(){
  $(".city-text").text("Philadelphia - Pop. 1,579,000");
	$(".city-facts").text("Philadelphia is the culture capital of the United States, and some say the world!");
});

$("#pittsburgh").click(function(){
  $(".city-text").text("Pittsburgh - Pop. 302,000");
	$(".city-facts").text("Pittsburgh is known as the 'City of Bridges' because it has more bridges than any other American city.");
});

$("#scranton").click(function(){
  $(".city-text").text("Scranton - Pop. 77,000");
	$(".city-facts").text("Scranton was home to America's first electric streetcar line, earning it the nickname the 'Electric City'.");
});

$("#allentown").click(function(){
  $(".city-text").text("Allentown - Pop. 121,000");
	$(".city-facts").text("The Liberty Bell was hidden in Allentown while British troops occupied Philadelphia.");
});

$("#erie").click(function(){
  $(".city-text").text("Erie - Pop. 97,000");
	$(".city-facts").text("Erie is Pennsylvania's only city located on a Great Lake.");
});

$("#harrisburg").click(function(){
  $(".city-text").text("Harrisburg - Pop. 49,000");
	$(".city-facts").text("Harrisburg almost became the capital of United States in the 1790s, but instead remains the capital of Pennsylvania.");
});
