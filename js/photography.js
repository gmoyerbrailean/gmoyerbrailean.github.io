$(document).ready(function() {
	
	// Initialize hidden albums
    $(".album").hide();
    
    // TODO: Add code to generate photo grid


    /* Take any black/white banner and replace w/ color when hovering.
       Focusing on the "a" element then changing the child div allows
       the color change to continue even when hovering over the title 
       from ".hovertext" */
    $("a")
        .mouseover(function() { 
            var src = $(this).children(".banner").attr("src").replace("_bw.png", ".png");
            $(this).children(".banner").attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).children(".banner").attr("src").match(/[^\.]+/) + "_bw.png";
            $(this).children(".banner").attr("src", src);
        })
		.click(function() {
        	 // Display photo grid under banner
        	 $(this).next(".album").toggle( );
        });
});
