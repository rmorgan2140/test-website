$('.flag').on('click', function() {
	// retrieve and display city skyline
	var skylineUrl = $(this).attr('city-skyline')
  // log skyline to console
  console.log(skylineUrl)

  $('#city-skyline').empty()

  $('#city-skyline').css('background-image', `url(${skylineUrl})`)
})

$("#philly").click(function(){
  $(".city-text").text("Philadelphia");
});

$("#pittsburgh").click(function(){
  $(".city-text").text("Pittsburgh");
});

$("#scranton").click(function(){
  $(".city-text").text("Scranton");
});

$("#philly").click(function(){
  $(".city-facts").text("Philadelphia is the culture capital of the United States, and some say the world!");
});

$("#pittsburgh").click(function(){
  $(".city-facts").text("Pittsburgh is known as the 'City of Bridges' because it has more bridges than any other American city!");
});

$("#scranton").click(function(){
  $(".city-facts").text("Scranton was home to America's first electric streetcar line, earning it the nickname the 'Electric City'!");
});
