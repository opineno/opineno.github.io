define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript_spanish.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
                //OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code
    
          	category1 : {
				name : 'Comida basura', //Will appear in the data.
		        title : {
	          		media : {word : 'Comida basura'}, //Name of the category presented in the task.
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
				name : 'Comida sana', //Will appear in the data.
		        title : {
		        	media : {word : 'Comida sana'}, //Name of the category presented in the task.
		        	css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
		       		 }, 
		        stimulusMedia : [ //Stimuli content as PIP's media objects
    		        {image : 'Paella.jpg'}, 
    	        	{image : 'Queso.jpg'}, 
    	        	{image : 'Aceitunas.jpg'}, 
            		{image : 'Gazpacho.jpg'}, 
            		{image : 'Bacalao.jpg'}, 
    	        	{image : 'Tortilla.jpg'}  ], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		      },	
    		attribute1 : {
				name : 'Moderación',
				title : {
					media : {word : 'Desagradable'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
					},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'reservado'},
      				{word: 'controlado'},
					{word: 'disciplinado'},
					{word: 'indiferente'},
					{word: 'desinteresado'},
					{word: 'desapegado'},
					{word: 'rechazado'},
					{word: 'evitativo'}	],
					//Stimulus css
					stimulusCss : {color:'#0000FF','font-size':'2.3em'}
					},
			attribute2 : {
				name : 'Antojo',
				title : {
					media : {word : 'Antojo'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
					},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'indulgente'},
					{word: 'tantado'},
					{word: 'deseoso'},
					{word: 'hambriento'},
					{word: 'insaciable'},
					{word: 'irresistible'},
					{word: 'adictivo'},
					{word: 'exquisito'}	],
					//Stimulus css
					stimulusCss : {color:'#0000FF','font-size':'2.3em'}
					},

		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/IAT_foods/images/'
		} 
	});
});
