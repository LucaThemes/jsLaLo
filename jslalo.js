function jsLaLo() {
	
	/**
	 * Add this class to each element that 
	 * needs to be lazy loaded
	 */
	var lazyClass = ".lazy";
	
	
	/**
	 * Select all elements with given class
	 */
	var lazySelector = document.querySelectorAll(lazyClass + ":not(.lazy-loaded)");
	
	
	/**
	 * Proceed only if there are unloaded divs remaining
	 */
	if ( lazySelector.length > 0 ) {
		
		/**
		 * Index - needed for iteration
		 */
		var index = 0;
		
		
		/**
		 * Amount of items with lazySelector class
		 */
		var elems = lazySelector.length;
		
		
		/**
		 * Inner window height
		 */
		var innerHeight = window.innerHeight;
		
		
		/**
		 * Initial item opacity, greater than 0
		 */
		var opacity = 0.1;
		
		
		/**
		 * Position of lazy loaded element from the top
		 */
		var ypos = lazySelector[index].offsetTop;
		
		
		/**
		 * Amount added to ypos to delay lazy loading a bit
		 */
		var offset = 120;
		
		
		/**
		 * Position of scroll
		 */
		var yscroll = window.pageYOffset + innerHeight || document.documentElement.scrollTop + innerHeight;
		
		if ( yscroll > ypos + offset ) {
		
			var timer = setInterval( function () {
				
				// Stop the clock if opacity is equal or greater than 1
				if ( opacity >= 1 ) {
					clearInterval(timer);
				}
				lazySelector[index].style.opacity = opacity;
				opacity += opacity * 0.1;
				
			}, 20);
			
			// Add class to loaded element to prevent any more actions on it
			lazySelector[index].classList.add("lazy-loaded");
			
		};
	
	};
	
}