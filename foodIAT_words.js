define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		//OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code

		category1 :	
		{
			name : 'Junk food', //Will appear in the data.
			title : {
				media : {word : 'Junk food'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  	{word : 'Potato chips'}, 
    			{word : 'French fries'}, 
    			{word : 'Fried chicken'}, 
    			{word : 'Pizza'}, 
    			{word : 'Soda'}, 
    			{word : 'Candy bar'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 : 
		{
			name : 'Healthy food', //Will appear in the data.
			title : {
				media : {word : 'Healthy food'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  	{word : 'Almonds'}, 
    			{word : 'Blueberries'}, 
    			{word : 'Salmon'}, 
    			{word : 'Eggs'}, 
    			{word : 'Avocado'}, 
    			{word : 'Broccoli'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

		//OP note: To edit the attributes (good vs. bad words), copy them here from fullscript.js and make the changes.

		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/images/'
		} 
	});
});
