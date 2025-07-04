define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
                //OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code
    
          	category1 : {
			name : 'Real milk', //Will appear in the data.
		        title : {
	          	media : {word : 'Real milk'}, //Name of the category presented in the task.
	          	css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
          		height : 4 //Used to position the "Or" in the combined block.
            		}, 
            		stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Cow1.jpg'}, 
        		{image : 'Cow2.jpg'}, 
        		{image : 'Cow3.jpg'}, 
        		{image : 'Cow4.jpg'}, 
        		{image : 'Cow5.jpg'}, 
        	        {image : 'Cow6.jpg'}  ], 
        	    	//Stimulus css
            		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	      	      },
          	category2 : {
			name : 'Fake milk', //Will appear in the data.
		        title : {
		        media : {word : 'Fake milk'}, //Name of the category presented in the task.
		        css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
		        }, 
		        stimulusMedia : [ //Stimuli content as PIP's media objects
    		        {image : 'NoCow1.jpg'}, 
    	        	{image : 'NoCow2.jpg'}, 
    	        	{image : 'NoCow3.jpg'}, 
            		{image : 'NoCow4.jpg'}, 
            		{image : 'NoCow5.jpg'}, 
    	        	{image : 'NoCow6.jpg'}  ], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		      },	
    
		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/IAT_foods/images/'
		} 
	});
});
