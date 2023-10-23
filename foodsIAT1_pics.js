define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Healthy food', //Will appear in the data.
			title : {
				media : {word : 'Healthy food'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Almonds.jpg'}, 
    			{image : 'Blueberries.jpg'}, 
    			{image : 'Salmon.jpg'}, 
    			{image : 'Eggs.jpg'}, 
    			{image : 'Avocado.jpg'}, 
    			{image : 'Broccoli.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Junk food', //Will appear in the data.
			title : {
				media : {word : 'Junk food'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Potato_chips.jpg'}, 
    			{image : 'French_fries.jpg'}, 
    			{image : 'Fried_chicken.jpg'}, 
    			{image : 'Pizza.jpg'}, 
    			{image : 'Soda.jpg'}, 
    			{image : 'Candy_bar.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/images/'
		} 
	});
});
