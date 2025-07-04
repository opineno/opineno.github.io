define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
                //OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code
    
category1 : {
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
        	        {image : 'Candy_bar.jpg'}  ], 
        	    	//Stimulus css
            		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	      	      },
    
category2 : {
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
    	        	{image : 'Broccoli.jpg'}  ], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		      },

attribute1 : {
			name : 'Not Enjoyable',
			title : {
			media : {word : 'Not Enjoyable'},
			css : {color:'#0000FF','font-size':'1.8em'},
			height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'disliked'},
      {word: 'less tasty'},
			{word: 'unappealing'},
			{word: 'bland'},
			{word: 'flavorless'},
			{word: 'unappetizing'},
			{word: 'unpalatable'}	],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
		
attribute2 : {
			name : 'Enjoyable',
			title : {
			media : {word : 'Enjoyable'},
			css : {color:'#0000FF','font-size':'1.8em'},
			height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'tasty'},
			{word: 'delicious'},
			{word: 'yummy'},
			{word: 'appetizing'},
			{word: 'flavorful'},
			{word: 'appealing'},
			{word: 'mouthwatering'}	],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},

		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/IAT_foods/images/'
		} 
	});
});
