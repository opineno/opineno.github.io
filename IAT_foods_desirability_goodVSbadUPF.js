define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
                //OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code
    
          	category1 : {
			name : 'Low fat-sugar-salt food', //Will appear in the data.
		        title : {
		          	media : {word : 'Low fat-sugar-salt food'}, //Name of the category presented in the task.
		          	css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
	          		height : 4 //Used to position the "Or" in the combined block.
            		}, 
            	stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Coca_Cola_Zero.jpg'}, 
	        		{image : 'Fiber_cereal.jpg'}, 
	        		{image : 'Frozen_yogurt.jpg'}, 
	        		{image : 'Fruit_gummies.jpg'}, 
	        		{image : 'Lentil_chips.jpg'}, 
        	        {image : 'Protein_bar.jpg'}  ], 
        	    	//Stimulus css
            		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	      	    },
          	category2 : {
			name : 'High fat-sugar-salt food', //Will appear in the data.
		        title : {
			        media : {word : 'High fat-sugar-salt food'}, //Name of the category presented in the task.
			        css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
			        }, 
		       stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Candy_bar.jpg'}, 
	        		{image : 'Coca_Cola.jpg'}, 
	        		{image : 'Fruit_loops.jpg'}, 
	        		{image : 'Gummy_bears.jpg'}, 
	        		{image : 'Ice_cream.jpg'}, 
        	        {image : 'Potato_chips.jpg'}  ], 
					//Stimulus css (style)
					stimulusCss : {color:'#31940F','font-size':'1.8em'}
		     	},
		attribute1 : {
			name : 'Restraint',
			title : {
				media : {word : 'Restraint'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
				},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'reserved'},
				{word: 'controlled'},
				{word: 'disciplined'},
				{word: 'indifferent'},
				{word: 'uninterested'},
				{word: 'detached'},
				{word: 'rejecting'},
				{word: 'avoidant'}	],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
		attribute2 : {
			name : 'Craving',
			title : {
				media : {word : 'Craving'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
				},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'indulgent'},
				{word: 'tempted'},
				{word: 'desirous'},
				{word: 'hungry'},
				{word: 'insatiable'},
				{word: 'irresistible'},
				{word: 'addictive'},
				{word: 'mouthwatering'}	],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},

		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/CurrentPics/'
		} 
	});
});
